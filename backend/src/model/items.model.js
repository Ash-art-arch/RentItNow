const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    images:[{
        type:String,
        required:true,
    }],
    description:{
        type:String,
        required:true,
    },
    available:{
        type:Boolean,
        default:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    ratings:{
        type:Number,
        default:0
    },
    totalQuantity: {
    type: Number,
    required: true,
    default: 1,
    min: 1
  }
},{timestamps:true})

const itemsModel = mongoose.model("Items",itemSchema)

module.exports= itemsModel