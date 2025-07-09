const mongoose = require("mongoose");
const Order = require("../model/order.model.js");


const createOrderHandler = async (req, res) => {
  try {
    const {
      renterId,
      itemId,
      sellerId,
      startDate,
      endDate,
      totalPrice,
      status
    } = req.body;

    
    if (!renterId || !itemId || !sellerId || !startDate || !endDate || !totalPrice) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    
    if (
      !mongoose.Types.ObjectId.isValid(renterId) ||
      !mongoose.Types.ObjectId.isValid(itemId) ||
      !mongoose.Types.ObjectId.isValid(sellerId)
    ) {
      return res.status(400).json({ message: "Invalid ObjectId format" });
    }

    
    const createdOrder = await Order.create({
      renterId,
      itemId,
      sellerId,
      startDate,
      endDate,
      totalPrice,
      status: status || "Pending",
      isPaid: true,
      paidAt: new Date()
    });

    res.status(201).json({
      message: "Order saved to database",
      order: createdOrder
    });

  } catch (e) {
    console.error("Create Order Error:", e);
    res.status(500).json({
      message: "Server error",
      error: e.message
    });
  }
};

const getDashboardStatsHandler = async (req, res) => {
  try {
    const sellerId = req.query.sellerId;

    console.log(sellerId);
    
    if (!mongoose.Types.ObjectId.isValid(sellerId)) {
      return res.status(400).json({ message: "Invalid sellerId" });
    }

    const validOrders = await Order.find({

      sellerId: new mongoose.Types.ObjectId(sellerId),
      
      
      
    });
    console.log(validOrders);

    const totalSales = validOrders.length;
    const totalRevenue = validOrders.reduce((sum, o) => sum + o.totalPrice, 0);
    const totalProfit = totalRevenue * 0.1; 
   const uniqueRenters = new Set(
  validOrders
    .filter(o => o.renterId && typeof o.renterId.toString === 'function')
    .map(o => o.renterId.toString())
);

    

    res.json({
      totalSales,
      totalRevenue,
      totalProfit,
      totalUsers: uniqueRenters.size
    });

  } catch (e) {
    console.error("Dashboard error:", e);
    res.status(500).json({ message: "Failed to fetch stats" });
  }
};

module.exports = {
  createOrderHandler,
  getDashboardStatsHandler
};
