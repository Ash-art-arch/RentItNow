const mongoose = require("mongoose")
const categoryModel = require("../model/categories.model")
const cloudinary = require("cloudinary").v2
require('dotenv').config()
cloudinary.config({
    cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
    api_key: `${process.env.CLOUDINARY_API_KEY}`,
    api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
})
console.log(process.env.CLOUDINARY_API_KEY);
console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log(process.env.CLOUDINARY_API_SECRET);
const getCategory= async (req ,res)=>{
    const categories = await categoryModel.find()
    res.status(200).json(categories)
}
const addCategory = async (req, res) => {
    const { name } = req.body;
  
    if (!name || !req.files || !req.files.thumbnail) {
      return res.status(400).json({
        message: "Please provide name and thumbnail image",
      });
    }
  
    try {
      // Upload thumbnail to Cloudinary
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
  
      const thumbnailResult = await streamUpload(req.files.thumbnail[0].buffer);
  
      // Optionally upload header image if provided
      let headerResult = null;
      if (req.files.header) {
        headerResult = await streamUpload(req.files.header[0].buffer);
      }
  
      // Create category in DB
      const newCategory = await categoryModel.create({
        name: name,
        thumbnailImage: thumbnailResult.secure_url,
        headerImage: headerResult ? headerResult.secure_url : null,
      });
  
      res.status(201).json({
        message: "Category created successfully",
        category: newCategory,
      });
    } catch (error) {
      console.error("Error adding category:", error);
      res.status(500).json({ message: "Server error while adding category" });
    }
  };
  
const  getSingleCategory = async (req,res)=>{
    const {id} = req.params
    const category = await categoryModel.findById(id)
    if(!category){
        return res.status(404).json({
            message:"Category not found"
        })
    }
    res.status(200).json(category)
}
 module.exports={
    getCategory,
    addCategory,
    getSingleCategory
 }