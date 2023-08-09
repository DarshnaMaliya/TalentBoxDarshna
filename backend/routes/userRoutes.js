import express from "express";
import getAllUser, { verifyToken } from "../controllers/userController.js";
import { signUp, login, googleLogin } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signUp);
router.post("/login", login);
router.post("/googlelogin", googleLogin);

export default router;