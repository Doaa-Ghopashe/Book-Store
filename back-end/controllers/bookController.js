const bookModel = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    //pagination
    const queryObj = {...req.query};
    const excludedFields = ['page','limit']
    excludedFields.forEach(el => delete queryObj[el]);
    let query = bookModel.find(queryObj);
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const numPages = await bookModel.countDocuments().populate({
        path: "category",
        populate: {
           path: "author",
        }})
      if (skip >= numPages) throw new Error("This page does not exist");
    }
    //excute query
    const book = await query;
    res.status(200).json({
      status: "success",
      data: { book },
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "failed",
      err: error.message,
 }); }};
const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.find({ _id: id });
    res.status(200).json({
      status: "success",
      data: { book },
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      err: error.message,
    });
  }
};
const addNewBook = async(req,res) => {
  try {
    const data = { ...req.body };
   
    const addBook = await bookModel.create(data);
   
    res.status(200).json({
      status: "success",
      data: { 
...addBook,
image:req.file.path

       },
    })
  } catch (error) {

    res.status(404).json({
      status: "failed",
      err: error.message,
    });
  }
};
const editBook = async (req, res) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const Book = await bookModel.findOneAndUpdate({_id:id},data,{new:true});
    res.status(200).json({
      status: "success",
      data: "Updated Book successfully",
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      err: error.message,
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteBook = await bookModel.findOneAndRemove({_id:id});
    res.status(200).json({
      status: "success",
      data: "deleted successfully",
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      err: error.message,
    });
  }
};

const deleteAllBooks= async(req,res)=>{
  try {
    
     const deleteAll= await bookModel.find({}).deleteMany({})
     res.status(200).json({
     status: 'success',
     data:"deleted All successfully"
 });
  } catch (error) {
     res.status(404).json({
         status:"failed",
         err:error.message
     });   
  }
}

module.exports = {
  getAllBooks,
  getOneBook,
  editBook,
  deleteBook,
  addNewBook,
  deleteAllBooks
};
