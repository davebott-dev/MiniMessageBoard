const express=  require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.get('/',controller.importData);
router.post("/new", controller.createDataPost);

module.exports = router;