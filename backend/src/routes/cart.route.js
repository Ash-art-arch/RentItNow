const express = require("express");
const router = express.Router();

const {syncCart, getCart} = require("../controllers/cart.controller")

router.post("/:userId", syncCart);
router.get("/:userId", getCart)
module.exports = router;