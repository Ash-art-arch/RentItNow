const express = require("express")
const router = require("./items.route")
const protectedRoute = require("../middlewares/auth.middleware")
const { paymentByStripe, verifyStripe } = require("../controllers/order.controller")

const orderRouter = express.Router()


orderRouter.post('/paymentstripe',protectedRoute,paymentByStripe)

orderRouter.post('/verifyStripe',protectedRoute,verifyStripe)


module.exports=orderRouter