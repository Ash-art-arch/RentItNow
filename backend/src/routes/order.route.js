const express = require("express")
const router = require("./items.route")
const protectedRoute = require("../middlewares/auth.middleware")
const { paymentByStripe } = require("../controllers/order.controller")
const { getOrderSummaryHandler } = require("../controllers/order.controller")

const orderRouter = express.Router()


orderRouter.post('/paymentstripe',protectedRoute,paymentByStripe)


orderRouter.get("/get", protectedRoute, getOrderSummaryHandler);



module.exports=orderRouter