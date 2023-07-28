import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/user", router);

// database Connectivity
mongoose.connect("mongodb+srv://Darshna:399ixQwgeVLUAr95@darshna-cluster-1.0qbhmgk.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("Connected to Database"))

app.listen(5005, () => {
    console.log("Server running on port 5005");
})