const express = require("express");
const router = express.Router();
const Order = require("../model/order.model");
const User = require("../model/user.model"); 

router.get("/dashboard", async (req, res) => {
  try {
    //const orders = await Order.find({ status: { $in: ["Approved", "Complete"] } });
    const orders = await Order.find();

    const totalSales = orders.length;

    const totalProfit = orders.reduce((sum, order) => sum + order.totalPrice * 0.1, 0); 
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);

    const renters = await Order.distinct("renterId");
    const totalUsers = renters.length;

   res.json({ totalSales, totalUsers, totalProfit, totalRevenue });
    //res.json({totalSales: 12,totalUsers: 5,totalProfit: 3201.98, totalRevenue: 15600});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
