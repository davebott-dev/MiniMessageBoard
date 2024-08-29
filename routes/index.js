const express=  require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.get('/',controller.get);
router.post("/new", controller.post);

module.exports = router;