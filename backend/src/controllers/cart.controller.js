const mongoose = require("mongoose")
const UserModel = require("../model/user.model.js")

const { Router } = require("express")
const userRouter = require("../routes/user.route.js")

const syncCart = async(req,res) =>{
    const {userId} = req.params;
    const {cart} = req.body;
    try{
        const user = await UserModel.findById(userId);
        if(!user) return res.status(400).json({message: "user not found"});
        user.cart = cart;
        await user.save();
        res.status(200).json({message: "Cart synced succesfully", cart: user.cart});
    } catch(error){
        console.error("Cart sync error: ", error);
      res.status(500).json({error:"Failed to sync"});
 // console.log("Received cart: ", cart);
  //return res.status(200).json({message:" Received cart for testing", cart});
    }
};
const getCart = async(req,res) =>{
    const {userId} = req.params;
    try{
        const user = await UserModel.findById(userId).populate("cart.item");
        if(!user) return res.status(404).json({message: "User not Found"});
       console.log("Cart from database", user.cart);
        res.status(200).json({cart: user.cart});
    } catch(error){
        res.status(500).json({error: "Failed to fetch cart"})
    }
};
module.exports = {syncCart, getCart};