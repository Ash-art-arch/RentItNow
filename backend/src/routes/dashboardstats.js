const { Router } = require("express");
const {
  createOrderHandler,
  getDashboardStatsHandler
} = require("../controllers/dashboard.controller.js");
const protectedRoute = require("../middlewares/auth.middleware.js");

const dashboardRouter = Router();


dashboardRouter.post(
  "/add",
  protectedRoute,
  (req, res) => {
    if (!req.user || req.user.role !== "Seller") {
      return res.status(403).json({ message: "Only sellers can add items" });
    }
    createOrderHandler(req, res);
  }
);


dashboardRouter.get("/get", protectedRoute, (req, res) => {
  
  req.query.sellerId = req.user.id;
  getDashboardStatsHandler(req, res);
});

module.exports = dashboardRouter;
