const { Router } = require('express');
const rescue = require('express-rescue');

const saleRouter = Router();
const saleController = require('../controllers/saleController');

saleRouter.get('/:id', rescue(saleController.getById));
saleRouter.delete('/:id', rescue(saleController.remove));
saleRouter.get('/', rescue(saleController.getAll));
saleRouter.post('/', rescue(saleController.add));

module.exports = saleRouter;