const { Router } = require('express');
const rescue = require('express-rescue');

const saleRouter = Router();
const saleController = require('../controllers/saleController');

saleRouter.get('/:id', rescue(saleController.getById));
saleRouter.get('/', rescue(saleController.getAll));

module.exports = saleRouter;