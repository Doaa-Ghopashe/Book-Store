const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");


 PORT=5000;
//  PORT = process.env.SERVER_PORT,
//  Mongoose_URL = process.env.MONGOOES_URL,
 
 app_server = express(),
 


 //midderware
app_server.use('/',(req,res)=>{
    res.send("this is our start");
})

mongoose.connect('mongodb://127.0.0.1:27017/BookStore',{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(!err) return console.log("the database is connected");
    return console.log(err);
})

app_server.listen(PORT,(err)=>{
    if(!err) return console.log("the server is being listened on port "+PORT);
    return console.log(err);
})



