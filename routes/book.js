const express=require('express');
const bookRouter=express.Router();
const bookController=require('../controllers/bookController.js')
const{validate}= require('../Middleware/validation/validator.js')
const{addBookValidateRule,updateBookValidateRule}=require('../validators/validator.js');

bookRouter.get('/',bookController.getAllBooks);
bookRouter.get('/:id',bookController.getOneBook);

bookRouter.post('/', validate(addBookValidateRule),bookController.addNewBook);
bookRouter.put('/:id',validate(updateBookValidateRule),bookController.editBook);

bookRouter.delete('/:id',bookController.deleteBook,(req,res)=>{

});
bookRouter.delete('/',bookController.deleteAllBooks);


module.exports=bookRouter;