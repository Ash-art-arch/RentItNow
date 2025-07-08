// 🔁 Declare this ONCE, outside the functions
const orders = [];

const createOrderHandler = async (req, res) => {
  try {
    const incomingData = req.body;

    if (Array.isArray(incomingData)) {
      incomingData.forEach((order, index) => {
        const { renterId, itemId, sellerId, startDate, endDate, totalPrice, status } = order;

        if (!renterId || !itemId || !sellerId || !startDate || !endDate || !totalPrice) {
          throw new Error(`Missing required fields in order at index ${index}`);
        }

        orders.push({
          id: orders.length + 1,
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
      });

      return res.status(201).json({ message: "Multiple orders added", total: incomingData.length });
    }

    // Fallback for single order
    const { renterId, itemId, sellerId, startDate, endDate, totalPrice, status } = incomingData;

    if (!renterId || !itemId || !sellerId || !startDate || !endDate || !totalPrice) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = {
      id: orders.length + 1,
      renterId,
      itemId,
      sellerId,
      startDate,
      endDate,
      totalPrice,
      status: status || "Pending",
      isPaid: true,
      paidAt: new Date()
    };

    orders.push(order);
    res.status(201).json({ message: "Order added", order });

  } catch (e) {
    console.error("POST error:", e.message);
    res.status(500).json({ message: e.message || "Server error" });
  }
};

const getDashboardStatsHandler = async (req, res) => {
  try {
    // 👇 Will now include ALL orders
    const valid = orders.filter(o => ["Approved", "Complete"].includes(o.status));
    const totalSales = valid.length;
    const totalRevenue = valid.reduce((sum, o) => sum + o.totalPrice, 0);
    const totalProfit = valid.reduce((sum, o) => sum + o.totalPrice * 0.1, 0);
    const totalUsers = new Set(valid.map(o => o.renterId)).size;

    res.json({ totalSales, totalUsers, totalProfit, totalRevenue });
  } catch (e) {
    console.error("GET error:", e.message);
    res.status(500).json({ message: "Failed to fetch stats" });
  }
};

module.exports = {
  createOrderHandler,
  getDashboardStatsHandler
};
