const express =require("express")
const errorMiddleware=require("./middleware/error")
const app=express()
const dotenv=require("dotenv")

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload=require("express-fileupload")

dotenv.config({path:"./config/config.env"})

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())
//Route
const product=require("./routes/productRoute")
const user=require("./routes/userRoute")
const order=require("./routes/orderRoute")
const payment=require("./routes/paymentRoute")
app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use("/api/v1",payment)
//Middleware for Errors
app.use(errorMiddleware)
module.exports=app

