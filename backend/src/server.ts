import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/users";
dotenv.config()
const app=express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://brainly-the-second-brain-two.vercel.app/"
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use('/api/v1/users',userRouter);
async function main(){
    try{
        const dbUrl: string = process.env.DB_URL!; 
        await mongoose.connect(dbUrl)
        console.log("Connected to database")
        app.listen(3000,()=>{
            console.log("Server is running on port 3000")
        })
    }catch(err){
        console.error(err)
        process.exit(1)
    }
}
main();