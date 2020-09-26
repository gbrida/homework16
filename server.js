const express=require("express")
const app=express()
const port=process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const htmlroutes=require("./routes/htmlRoutes")

app.use(htmlroutes)
const mongoose=require("mongoose")

app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")

app.listen(port,function(){
    console.log("app listening"+port)
})