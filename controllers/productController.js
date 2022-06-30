const productService = require('../services/productService');
const status = require('../helpers/status');

const productController = {
  async getAll(_req, res) {
    const result = await productService.getAll();
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async getById(req, res) {
    const { id } = await productService.validateId(req.params);
    const result = await productService.getById(id);
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async add(req, res) {
    const product = await productService.validateProductBody(req.body);
    const result = await productService.add(product);
    res.status(status.HTTP_OK_CREATED).json(result);
  },
};

module.exports = productController;