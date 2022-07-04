const status = require('../helpers/status');
const saleService = require('../services/saleService');
const productService = require('../services/productService');

const validate = require('../services/validator');

const saleController = {
  async getAll(_req, res) { 
    const result = await saleService.getAll();
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async getById(req, res) {
    const result = await saleService.getById(req.params);
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async add(req, res) {
    const { sales } = await saleService.validateProductSale({ sales: req.body });
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
};

module.exports = saleController;