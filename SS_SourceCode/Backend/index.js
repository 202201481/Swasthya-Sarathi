
import express from "express"
import cookieParser from "cookie-parser" 
import cors from 'cors'
import mongoose from "mongoose"
import dotenv from 'dotenv'


app.listen(port,()=>{
    connectDB();
    console.log("Server is running on port... "+ port);
})