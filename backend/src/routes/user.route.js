const express = require("express")
const mongoose = require("mongoose")
const { signInHandler, loginHandler } = require("../controllers/user.controller")
const protectedRoute = require("../middlewares/auth.middleware")

const userRouter = express.Router()

userRouter.post('/signin',signInHandler)
userRouter.post('/login',loginHandler)
userRouter.get('/profile',protectedRoute,(req,res)=>{
    if(req.user){
        res.json({
            message:"User Found",
            user:req.user
        })
    }else{
        res.json({
            message:"User Not Found"
        })
    }
})

userRouter.post('/logout',protectedRoute,(req,res)=>{
    res.clearCookie("token")
    res.json({
        message:"Logout Success"
    })
})
module.exports=userRouter