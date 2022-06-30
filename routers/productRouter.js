const { Router } = require('express');
const rescue = require('express-rescue');
const productController = require('../controllers/productController');

const productRouter = Router();

productRouter.get('/:id', rescue(productController.getById));
productRouter.put('/:id', rescue(productController.update));
productRouter.delete('/:id', rescue(productController.remove));
productRouter.get('/', rescue(productController.getAll));
productRouter.post('/', rescue(productController.add));

module.exports = productRouter;