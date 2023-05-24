const mongoose =require("mongoose");

const bookSchema = new mongoose.Schema({

Name:{type:String,required:true},
categoryId:{type:Number,required:true,ref:"category"},
AuthorId:{type:String,required:true,ref:"author"},
shevle:{
    type:String,
    enum:['wanttoread','reading','currrentlyreading'], required:true},
    image:{type:String},
    avgRating:{type:Number},
})

const bookModel=mongoose.model("book",bookSchema);
module.exports=bookModel