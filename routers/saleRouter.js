const { Router } = require('express');

const saleRouter = Router();
const saleController = require('../controllers/saleController');

saleRouter.get('/:id', saleController.getById);
saleRouter.put('/:id', saleController.update);
saleRouter.delete('/:id', saleController.remove);
saleRouter.get('/', saleController.getAll);
saleRouter.post('/', saleController.add);

module.exports = saleRouter;