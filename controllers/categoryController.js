const categoryModel=require('../models/category');

const getAllcategorys=async(req,res)=>{
    try {
        const books = await categoryModel.find({})
        res.status(200).json({
            status: "success",
            data: { books }
        })
    } catch (error) {
        res.status(404).json({
            status: "failed",
            err: error.message
        })
    }
};
const getOnecategory=async(req,res)=>{
    
};
const addNewcategory=async(req,res)=>{};
const editcategory=async(req,res)=>{};
const deletecategory=async(req,res)=>{};

module.exports={getAllcategorys,getOnecategory,editcategory,deletecategory,addNewcategory,getAllcategorys}