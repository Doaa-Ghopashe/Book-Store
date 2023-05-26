const express=require('express');
const categoryRouter=express.Router();
const categoryController=require('../controllers/categoryController.js')

categoryRouter.get('/',categoryController.getAllcategorys);
categoryRouter.get('/:id',categoryController.getOnecategory);
categoryRouter.post('/',categoryController.addNewcategory);
categoryRouter.put('/:id',categoryController.editcategory);
categoryRouter.delete('/:id',categoryController.deletecategory);

module.exports=categoryRouter;