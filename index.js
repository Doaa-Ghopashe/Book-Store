require('dotenv').config();

const express = require('express'),

 PORT = process.env.SERVER_PORT,

 Mongoose_URL = process.env.MONGOOES_URL,
 
 app_server = express(),
 
 mongoose = require('mongoose');

app_server.listen(PORT,(err)=>{
    if(!err) return console.log("the server is being listened on port "+PORT);
    return console.log(err);
})

mongoose.connect(Mongoose_URL,{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(!err) return console.log("the database is connected");
    return console.log(err);
})
