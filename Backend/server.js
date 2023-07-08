import express from "express";
import stripe  from './stripe.js'
import dotenv  from "dotenv"
import cors from 'cors'

dotenv.config()
const app = express();
app.use(cors())


app.use("/api/stripe",stripe)

app.get("/",(req,res)=>{
    console.log("lets gooo!!!");
})

app.listen(5000,()=>{
    console.log("server is running");
})