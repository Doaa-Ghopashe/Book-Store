require('dotenv').config();

const express = require('express'),

 PORT = process.env.SERVER_PORT,

 Mongoose_URL = process.env.MONGOOES_URL,
 
 app_server = express();

 app_server.use(express.json());

 app_server.use(cors())

const bookRouter=require('./routes/book');

const categoryRouter=require('./routes/category');

app_server.use('/book',bookRouter);
app_server.use('/category',categoryRouter);
 

 mongoose = require('mongoose');

app_server.listen(PORT,(err)=>{
    if(!err) return console.log("the server is being listened on port "+PORT);
    return console.log(err);
})

mongoose.connect(Mongoose_URL,{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(!err) return console.log("the database is connected");
    return console.log(err);
})

