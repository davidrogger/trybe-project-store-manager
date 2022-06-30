const { Router } = require('express');
const rescue = require('express-rescue');
const productController = require('../controllers/productController');

const productRouter = Router();

productRouter.get('/', rescue(productController.getAll));
productRouter.get('/:id', rescue(productController.getById));
productRouter.post('/', rescue(productController.add));

module.exports = productRouter;