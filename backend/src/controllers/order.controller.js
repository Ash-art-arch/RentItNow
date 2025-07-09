const Stripe = require("stripe")
const itemsModel = require("../model/items.model")
const orderModel = require("../model/order.model")
const UserModel = require("../model/user.model")

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)

const currency = 'inr'
const deliveryPrice = 5
const paymentByStripe =async (req,res)=>{
 try{
    const {userId,items,address,startDate,endDate,totalPrice}  =req.body
    const {origin} = req.headers
    const sellerIds =await Promise.all( items.map(async (item)=>{
        const product =   await itemsModel.findById(item.id)
        return product.owner
    }))
    console.log(sellerIds)

    const orderData = {
        renterId:userId,
        sellerId:sellerIds,
        items:items,
        address:address,
        startDate,
        endDate,
        totalPrice:totalPrice,
        paymentInfo:{
            info:"Stripe"
        },
        isPaid:false,
        paymentDate:Date.now()

    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    const line_items =  items.map((item)=>({
        price_data : {
            currency:currency,
            product_data:{
                name:item.title
            },
            unit_amount:item.price*100
        },
        quantity:item.quantity
    }))

    line_items.push(
        {
            price_data : {
                currency:currency,
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:deliveryPrice*100
            },
            quantity:1
        }
    )

    const  session =await stripeInstance.checkout.sessions.create({
        success_url:`${origin}/verify?sucess=true&orderId=${newOrder._id}`,
        cancel_url:`${origin}/verify?sucess=false&orderId=${newOrder._id}`,
        line_items,
        mode:"payment"
    })
    res.json({success:true,session_url:session.url})
}
catch(e){
    console.log(e)
    res.status(400).json({success:false,error:e.message})
}
}
const verifyStripe =async (req,res)=>{
    const {orderId,success,userId} = req.body
    try{if(success==="true"){
        await orderModel.findByIdAndUpdate(orderId,{isPaid:true})
        await UserModel.findByIdAndUpdate(userId,{cart:[]})
        res.json({success:true,})
    }
    else{
        await orderModel.findByIdAndDelete(orderId)
        res.json({success:false})
    }}
    catch(e){
        console.log(e)
        res.status(400).json({success:false})
    }
}

module.exports = {
    paymentByStripe,verifyStripe
}