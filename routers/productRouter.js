const { Router } = require('express');
const productController = require('../controllers/productController');

const productRouter = Router();

productRouter.get('/search', productController.getByName);
productRouter.get('/:id', productController.getById);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.remove);
productRouter.get('/', productController.getAll);
productRouter.post('/', productController.add);

module.exports = productRouter;