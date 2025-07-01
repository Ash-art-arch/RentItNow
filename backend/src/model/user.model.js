const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        default:"Buyer"
    },
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Items"
        }
    ],
  
    itemsListed:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Items"
    }]

},{timestamps:true} )


const UserModel = mongoose.model("User",userSchema)

module.exports=UserModel