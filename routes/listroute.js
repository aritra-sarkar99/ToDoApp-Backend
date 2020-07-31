const express = require('express')
const router = express.Router()

const ListController = require('../controllers/List')

router.get('/',ListController.getIndex);
router.post('/todo', ListController.postIndex);
router.delete('/todo/:itemId',ListController.deleteIndex);
router.put('/todo/:itemId',ListController.updateIndex);
router.post('/todo/delete',ListController.deleteSelected);
module.exports = router