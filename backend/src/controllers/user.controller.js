const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const UserModel = require("../model/user.model.js")
const jwt = require("jsonwebtoken")
const { Router } = require("express")
const userRouter = require("../routes/user.route.js")
const saltRound = 10
const signInHandler=async (req,res)=>{
    const {name,email,phoneNo,password,role} = req.body
    if(name&&email&&phoneNo&&password){
      try{
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            res.status(400).json({message:"User existed for the given email"})
        }
        const hashedPassword = bcrypt.hashSync(password,saltRound) 
        const newUser = await UserModel.create({name:name,email:email,phoneNo:phoneNo,password:hashedPassword,role})
        res.json({
            message:"user created",
            user:{
                name:newUser.name,
                email:newUser.email,
                phoneNo:newUser.phoneNo
            }
        })

      }  
      catch(e){
        console.log(e)
        res.status(400).json({
            message:"Server error"
        })
      }
    }
}

const loginHandler = async (req,res)=>{
  const {email,password} = req.body
  if(!email&&!password){
    res.status(400).json({
      message:"Please provide email and password"
    })
  }
  try{
    const user = await UserModel.findOne({email})
    if(!user){
      res.status(400).json({
        message:"User not found"
      })
    }
    const passwordValid = bcrypt.compareSync(password,user.password)
    if(!passwordValid){
      res.status(400).json({
        message:"Invalid password"
      })
    }
    const token = jwt.sign({id:user._id,name:user.name,email:user.email,phoneNo:user.phoneNo,role:user.role},process.env.JWT_SECRET,{expiresIn:'2d'})
    res.cookie("token",token)
    return res.json({
      message:"Login success",
      user:{
        _id: user.id,
        name:user.name,
        email:user.email,
        phoneNo:user.phoneNo,
        role:user.role
      },
      token: token
    })
  }
  catch(e){
    console.log(e)
    res.status(500).json({
      message:"Server error"
    })
  }
}

module.exports={
    signInHandler,
    loginHandler
}