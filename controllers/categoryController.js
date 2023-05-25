const categoryModel=require('../models/category');

const getAllCategories=async(req,res)=>{
    try {
        const categories = await categoryModel.find({})
        res.status(200).json({
            status: "success",
            data: { categories }
        })
    } catch (error) {
        res.status(401).json({
            status: "failed",
            err: error.message
        })
    }
};
const getOneCategory=async(req,res)=>{
    try {
        const {id} = req.params
        const category = await categoryModel.find({_id:id})
        res.status(200).json({
            status: "success",
            data:{category}
        })
    } catch (error) {
        res.status(401).json({
            status: "failed",
            err: error.message
        })
    }
};
const addNewCategory=async(req,res)=>{
    try {
        const data={...req.body}
        const newCategory= await categoryModel.create(data)
        res.status(200).json({
            status: "added successfully",
            data:{newCategory}
        })
    } catch (error) {
        res.status(401).json({
            status: "failed to add",
            err: error.message
        })
    }
};
const editCategory=async(req,res)=>{
    try {
        const {id}=req.params
        const data=req.body
        const editCategory= await categoryModel.findOneAndUpdate({_id:id},data,{new:true})
        res.status(200).json({
            status: "Updated successfully",
            data: {editCategory}
        })
    } catch (error) {
       res.status(401).json({
        status: "failed to add",
        err: error.message
       })
    }
};
const deleteCategory=async(req,res)=>{
    try {
        const {id}=req.params
        const deleteCategory=await categoryModel.findOneAndDelete({_id:id})
        res.status(200).json({
            status: "deleted successfully"
        })
    } catch (error) {
        res.status(401).json({
            status: "failed to delete",
            err: error.message
        })
    }
};

module.exports={getAllCategories,getOneCategory,editCategory,deleteCategory,addNewCategory}