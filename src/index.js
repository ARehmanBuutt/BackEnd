// 1st approach is Database connection in one module with express app initilized in it aswell!

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants"

// import express from "express"
// const app = express()

// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("Error:", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("ERROR:", error)
//         throw err
//     }
// })()


// 2nd approach Connect DB in another file and Call here To make code clean


// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.error("MONGO DB CPNNECTION FAILED !!!", err)
})