const express  = require("express")
const { getCategory ,addCategory, getSingleCategory} = require("../controllers/category.controller")
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const categoryRouter = express.Router()

categoryRouter.get('/',getCategory)
categoryRouter.post('/add',upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "header", maxCount: 1}
  ]),addCategory)
categoryRouter.get('/:id',getSingleCategory)

module.exports=categoryRouter