const Item = require("../model/items.model");
const cloudinary = require("cloudinary").v2;
const User=require("../model/user.model")


const streamUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });
};

exports.createItem = async (req, res) => {
  try {
    console.log("🧾 Form Data:", req.body);
    console.log("🖼️ Memory Files:", req.files);

    const filesArray = req.files.items || [];

    
    const uploadedImages = await Promise.all(
      filesArray.map(file => streamUpload(file.buffer))
    );

    const imageUrls = uploadedImages.map(img => img.secure_url);

    
    const item = new Item({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category, 
      description: req.body.description,
      available: req.body.available === "true",
      owner: req.user.id, 
      ratings: req.body.ratings || 0,
      images: imageUrls,
    });

    const savedItem = await item.save();
    await  User.findByIdAndUpdate(req.user.id, {$push:{itemsListed:savedItem._id}});

    res.status(201).json({
      message: "Item created successfully",
      item: savedItem,
    });
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find()
      .populate("category", "name")
      .populate("owner", "name email");

    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
      .populate("category", "name")
      .populate("owner", "name email");

    if (!item) return res.status(404).json({ message: "Item not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Item not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Item not found" });

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};