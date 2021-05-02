const express=require("express")
const connectDB = require("./config/db")

const app=express()

const routes=require("./router/routes")

connectDB()

app.use(express.json())
app.use("/",routes)

const PORT=process.env.PORT || 5000;

app.listen(PORT,(err)=>{
  if (err) throw err;
  else
    console.log("listening");
})
