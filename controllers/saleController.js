const status = require('../helpers/status');
const saleService = require('../services/saleService');
const productService = require('../services/productService');

const { validate } = require('../services/validationService');

const saleController = {
  async getAll(_req, res) { 
    const result = await saleService.getAll();
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async getById(req, res) {
    const id = await validate.id(req.params);
    const result = await saleService.getById(id);
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async add(req, res) {
    const { sales } = await validate.productSalesBody({ sales: req.body });
    await Promise.all(sales.map(({ productId }) => productService.getById(productId)));
    const result = await saleService.add(sales);
    res.status(status.HTTP_OK_CREATED).json(result);
  },
  async remove(req, res) {
    const { id } = await validate.id(req.params);
    await saleService.getById({ id });
    await saleService.remove({ id });
    res.status(status.HTTP_NO_CONTENT).json();
  },
  async update(req, res) {
    const { id } = await validate.id(req.params);
    const { sales } = await validate.productSalesBody({ sales: req.body });
    await Promise.all(sales.map(({ productId }) => productService.getById(productId)));
    await saleService.getById({ id });
    const result = await saleService.update({ id, sales });
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
};

module.exports = saleController;