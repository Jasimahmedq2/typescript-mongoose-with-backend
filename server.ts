import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./src/moduler/user/user.route";

const app: Application = express();
const PORT: number = 5000;

app.use(cors())
app.use(express.json())

// Routing

app.use('/api/v1/user', userRouter)

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://typescript-mongoose:mUMOrp6hITy11Nr2@cluster0.zzzhe7n.mongodb.net/");
    console.log('db connected')
    app.listen(PORT, () => {
      console.log("we are ready to take message");
    });
  } catch (error) {
    console.error('oops, here was an error', error)
  }
};
connectDB()

app.get("/", (req: Request, res: Response) => {
  res.send("hello server");
});
