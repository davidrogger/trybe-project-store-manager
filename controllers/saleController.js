const status = require('../helpers/status');
const saleService = require('../services/saleService');
const productService = require('../services/productService');

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
    const products = await saleService.validateProductSale(req.body);
    await Promise.all(products.map(({ productId }) => productService.getById({ productId })));
    const result = await saleService.add(products);
    res.status(status.HTTP_OK_CREATED).json(result);
  },
};

module.exports = saleController;