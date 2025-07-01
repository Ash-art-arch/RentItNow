const express  = require("express")
const { getCategory ,addCategory} = require("../controllers/category.controller")

const categoryRouter = express.Router()

categoryRouter.get('/',getCategory)
categoryRouter.post('/add',addCategory)

module.exports=categoryRouter