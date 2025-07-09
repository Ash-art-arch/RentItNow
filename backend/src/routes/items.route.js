const express = require("express");
const router = express.Router();
const multer = require("multer");

const itemController = require("../controllers/items.controller");
const protectedRoute = require("../middlewares/auth.middleware");


const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post(
  "/add",protectedRoute,
  upload.fields([{ name: "items", maxCount: 5 }]),
  itemController.createItem
);


router.get("/", itemController.getAllItems);
router.get("/my-items",protectedRoute, itemController.getSellerItems);
router.get("/:id", itemController.getItemById);

router.put("/:id", protectedRoute, itemController.updateItem, upload.fields([{ name: "items", maxCount: 5 }]));

router.delete("/del:id", protectedRoute, itemController.deleteItem);



module.exports = router;
