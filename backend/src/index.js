const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route");
const cookieParser= require("cookie-parser")
const { default: mongoose } = require("mongoose");
const categoryRouter = require("./routes/categories.route");

dotenv.config();
const app = express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/categories',categoryRouter)

app.listen(5000,()=>{
    console.log("Server Running At port 5000")
})
mongoose.connect(process.env.DB_URL).then(console.log("Db Connected"))

