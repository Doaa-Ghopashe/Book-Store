const bookModel = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    //pagination
    const queryObj = { ...req.query };
    const excludedFields = ["page", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);
    let query = bookModel.find(queryObj);
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    //excute query
    const book = await query
      .populate({
        path:"AuthorId",
      })
      .populate({
        path: "categoryId",
      })
    // const book = await bookModel.find({});
    res.status(200).json({
      status: "success",
      data: { book },
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "failed",
      err: error.message,
    });
  }
};
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
const addNewBook = async (req, res) => {
  console.log(req.body);
  try {
    let newBook ={
              title: req.body.title,
              description: req.body.desc,
              AuthorId: req.body.AuthorId,
              categoryId: req.body.categoryId,
              photo:req.file.path
          }
         
    const addBook = await bookModel.create(
      newBook
      // ...req.body,
    //  addBook['photo']=req.file.filename
    );
    res.status(200).json({
      status: "success",
      data: {
        addBook,
        photo: req.file.filename
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      err: error.message,
    });
  }
};
const editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {...req.body};
    const Book = await bookModel.findOneAndUpdate({ _id: id }, data, {new: true});

    res.status(200).json({
      status: "Updated successfully",
      data: {Book}
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      err: error.message,
    });
  }
};
//==============================================================================
// async function findBook(id) 
// {
//   const book = await bookModel.findOne({_id:id})
//   return book;
// }
// async function editBook(request,respone)
// {

//     let {id} =request.params
//     const oldbook =  await findBook(id)

//    if(!oldbook){
//         return respone.json({"message":"This book Is Not in DB"})
//    }
//     let newBook ={
//         title: request.body.title,
//         description: request.body.desc,
//         authorId: request.body.AuthorId,
//         categoryId: request.body.categoryId,
//     }
  
    // if(request.file){
    //     if(oldbook.image){
    //         deleteimage(oldbook)
    //     }
    //     newBook['image']=request.file.filename
    // }
    // else if(oldbook.image)
    //          newBook['image']=oldbook.image
        
   

//     bookModel.updateOne({_id:id},{$set: newBook},(error)=>{
//         if(!error){
//             return respone.json({"message":"Book Updated Successfully"})
//         }else
//         {
//             console.log(error)
//             return respone.json(error)

//         }
//     })
// }
//=========================================================
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await bookModel.findOneAndRemove({ _id: id });
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
const deleteAllBooks = async (req, res) => {
  try {
    const deleteAll = await bookModel.find({}).deleteMany({});
    res.status(200).json({
      status: "success",
      data: "deleted All successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      err: error.message,
    });
  }
};
module.exports = {
  getAllBooks,
  getOneBook,
  editBook,
  deleteBook,
  addNewBook,
  deleteAllBooks,
};
