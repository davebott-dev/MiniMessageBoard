const express= require('express');
const router = express.Router();
const controller = require('../controllers/singleMessageController');

router.get('/:messageId',controller.getSinglePost);

module.exports = router;