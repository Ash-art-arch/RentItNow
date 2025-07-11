const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    renterId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    items:{
        type:Array,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    sellerId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    totalPrice:{
        type:Number,
        required:true
    },
   // quantity:{
     //   type:Number,
       // required:true
   // },
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
    },

    isPaid:{
        type:Boolean,
        default:false
    },
    paidDate:Date
},{timestamps:true})


const orderModel = mongoose.model("Order",orderSchema)

module.exports=orderModel