const express = require("express");
const router = express.Router();
const multer = require("multer");

const itemController = require("../controllers/items.controller");
const protectedRoute = require("../middlewares/auth.middleware");


const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post(
  "/add",
  protectedRoute,
  upload.fields([{ name: "items", maxCount: 5 }]),
  async (req, res) => {
    if (!req.user || req.user.role !== "Seller") {
      return res.status(403).json({ message: "Only sellers can add items" });
    }

     itemController.createItem(req, res);
  }
  
);



router.get("/", itemController.getAllItems);
router.get("/my-items",protectedRoute, itemController.getSellerItems);
router.get("/:id", itemController.getItemById);

router.put("/:id", protectedRoute, itemController.updateItem, upload.fields([{ name: "items", maxCount: 5 }]));
router.put('/:id', protectedRoute, upload.single('image'), itemController.updateItem);

router.delete("/del/:id", protectedRoute, itemController.deleteItem);



module.exports = router;
