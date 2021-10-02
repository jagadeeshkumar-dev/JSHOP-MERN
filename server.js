const express = require("express");

const app= express()

var dbconnection =require("./Db");

const bodyParser = require("body-parser")


var productsRoute =require('./routes/productRoute')
var userRoute=require('./routes/userRoute')
var orderRoute=require('./routes/orderRoute')


app.use(bodyParser.json())
const path=require('path')
app.use('/api/products/',productsRoute)
app.use('/api/user/',userRoute)
app.use('/api/order/',orderRoute) 


if(process.env.NODE_ENV === 'production'){

    app.use('/', express.static('jshop/build'))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'jshop/build/index.html'))
    })
} 


const port =process.env.PORT || 8000

app.listen(port,()=>console.log("server started"));