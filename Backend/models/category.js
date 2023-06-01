const mongoose =require("mongoose");

const categorySchema=new mongoose.Schema({
    Name:{type:String,required:true,trim:true , unique: true},
    
})

<<<<<<< HEAD
const categoryModel = mongoose.model('Category', categorySchema);

=======
const categoryModel=mongoose.model('category', categorySchema);
>>>>>>> fea41719983c0a26e2d098f204f70e6b7e5da5b0
module.exports=categoryModel;