const express=  require('express');
const router = express.Router();
const controller = require('../controllers/indexController');


router.get('/',controller.importData);
router.post("/new", controller.createDataPost);
router.post('/message/:messageId',controller.deletePost)

module.exports = router;