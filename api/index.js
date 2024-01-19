import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
// this allow server to accept json
app.use(express.json());

app.listen(3300, () => {
  console.log("Server running on port 3300!!");
});

// this will concatenate with the path name from the methods in userRouter file
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
