const mongoose = require("mongoose")
const categoryModel = require("../model/categories.model")

const getCategory= async (req ,res)=>{
    const categories = await categoryModel.findAll()
    res.status(200).json(categories)
}
const addCategory = async (req,res)=>{

}

 module.exports={
    getCategory,
    addCategory
 }