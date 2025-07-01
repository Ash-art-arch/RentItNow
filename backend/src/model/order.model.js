const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    renterId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    itemId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Items"
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    totalPrice:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Approved","Complete","Cancelled"],
        default:"Pending"
    },
    deliverableAddress:{
        street:String,
        city:String,
        state:String,
        pincode:Number,
        country:String
    },
    paymentInfo:{
        id:String,
        status:String
    },
    isPaid:{
        type:Boolean,
        default:false
    },
    paidAt:Date
},{timestamps:true})

const orderModel = mongoose.model("Order",orderSchema)

module.exports=orderModel