import UserLogin from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secretKey = 'darshna_secret';

// Middleware to verify JWT
export function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        token,
        message: 'Forbidden',
      });
    }

    req.user = decoded;
    next();
  });
}

const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await UserLogin.find();
    }catch (err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"No user found"});
    }
    return res.status(200).json({users});
};

export const signUp = async(req, res, next) => {
    const {name, email, password} = req.body;
    let existingUser;
    try{
        existingUser = await UserLogin.findOne({email});
    }catch(err) {
        console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"User exists...You can Login"});
    }
   const hashedPassword = bcrypt.hashSync(password);
   const user = new UserLogin({
    name, 
    email,
    password:hashedPassword
   });
   
   try{
        await user.save();
    } catch (err) {
        console.log(err)
    }
    return res.status(201).json({user});
}

 export const login = async (req, res, next) => {
    const {email, password} = req.body;
    let existingUser;
    try{
        existingUser = await UserLogin.findOne({email});
    }catch(err){
        console.log(err);
    }
    if(!existingUser){
        res.status(404).json({message:"Couldn't find user by this email"});
    }

    const isPasswordCorrect = bcrypt.compareSync( password , existingUser.password);
    
    const tok = jwt.sign({ user: existingUser }, secretKey, { expiresIn: '7d' });
      if (!tok) {
          return res.json({ success: false, message: 'JWT Token Error !!!' });
      } else if(isPasswordCorrect && tok)
      return res.json({ success: true, existingUser, auth: tok })
  }

//      if(!isPasswordCorrect){
//         return res.status(400).json({message:"Incorrect password"});
//     } else {
//     return res.status(200).json({message:"Successful Login", user:existingUser, token});
// }

export default getAllUser;