import express from "express";
import stripe  from './stripe.js'
import dotenv  from "dotenv"
import cors from 'cors'
const PORT = process.env.PORT || 5000

dotenv.config()
const app = express();
app.use(cors())


app.use("/api/stripe",stripe)

app.get("/",(req,res)=>{
    console.log("lets gooo!!!");
})

app.listen(PORT,()=>{
    console.log("server is running");
})