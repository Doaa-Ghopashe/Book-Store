const express = require('express');
const authorController = require('../controllers/authorController')
const router = express.Router();

router.post('/', authorController.add);
router.get('/' , authorController.list );
router.get('/:id' , authorController.getById );
router.delete('/:id' , authorController.remove );
router.put('/:id' , authorController.edit );

module.exports = router;