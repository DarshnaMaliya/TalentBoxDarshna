import { Button, TextField, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { loginActions } from "../store";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [isSignUp, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const sendRequest = async (type = "login") => {
    const res = await axios.post(`http://localhost:5005/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignUp) {
      sendRequest("signup")
        .then((data) => {
          localStorage.setItem("uname", data.existingUser.name);
          localStorage.setItem("userId", data.existingUser._id);
        }).then(() => dispatch(loginActions.login())).then(() => navigate("/courses"));
    } else {
      sendRequest()
        .then((data) => {
          localStorage.setItem("uname", data.existingUser.name);
          localStorage.setItem("userId", data.existingUser._id);
        }).then(() => dispatch(loginActions.login())).then(() => navigate("/courses"));
    }
  }

  //code to persist user after reload
  useEffect(() => {
    const loggedInUser = localStorage.getItem("userId");
    console.log(loggedInUser);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [])

  //code for sign-in with google
  const responseGoogle = (response) => {
    console.log(response);
    axios.post("http://localhost:5005/api/user/googlelogin", {
    tokenID: response.tokenID})
    .then(res => console.log(res))
  };

  const responseFailureGoogle = (response) => {
    console.log(response);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box maxWidth={400}
          display={"flex"} flexDirection={"column"} alignItems="center" justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}>
          <Typography variant="h2" padding={3} textAlign="center">{isSignUp ? "Signup" : "Login"}</Typography>
          {isSignUp && <TextField onChange={handleChange} name="name" margin="normal" placeholder="Name" value={inputs.name} />}
          <TextField onChange={handleChange} name="email" margin="normal" placeholder="Email" type={"email"} value={inputs.email} />
          <TextField onChange={handleChange} name="password" margin="normal" placeholder="Password" type={"password"} value={inputs.password} />
          <Button color="warning" variant="contained" type="submit"> Submit</Button>
          <Button onClick={() => setIsSignup(!isSignUp)}>Change to {isSignUp ? "Login" : "Signup"}
          </Button>
          <GoogleLogin
            clientId="599103622643-op2ci781ubcil6s1rmja1mmis6nge755.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Box>
      </form>
    </div>
  )
}

export default Signin;