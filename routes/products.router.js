
var express = require('express');
var router = express.Router();
var productsCtrl = require('../controllers/products.ctrl');


router.get('/', productsCtrl.get);
router.get('/:id', productsCtrl.getById);
router.post('/',productsCtrl.save)

module.exports = router;