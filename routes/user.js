const express = require('express');
const userController = require('../controllers/user')
const router=express.Router();

router.post('/user' , userController.add )
router.get('/user' , userController.list )
router.get('/user/:id' , userController.getById )
router.delete('/user/:id' , userController.remove )
router.put('/user/:id' , userController.edit )



module.exports = router;