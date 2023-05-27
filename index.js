require('dotenv').config();
// const multer = require("multer");

const express = require('express'),


 PORT = process.env.SERVER_PORT,

 Mongoose_URL = process.env.MONGOOES_URL,

 app_server = express();
 app_server.use(express.json());

 const bookRouter=require('./routes/book');
 const categoryRouter=require('./routes/category');
 const user = require('./routes/user')
 const author = require('./routes/author')

 app_server.use('/book',bookRouter);
 app_server.use('/category',categoryRouter);

  app_server.use(user)
 app_server.use(author)

//  const upload = multer({ dest: "public/files" });

//  app_server.post("/api/uploadFile", upload.single("myFile"), (req, res) => {
//     // Stuff to be added later
//     console.log(req.file);
//   });

 mongoose = require('mongoose');

app_server.listen(PORT,(err)=>{
    if(!err) return console.log("the server is being listened on port "+PORT);
    return console.log(err);
})

mongoose.connect(Mongoose_URL,{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(!err) return console.log("the database is connected");
    return console.log(err);
})

