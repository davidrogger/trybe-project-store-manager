const productModel = require('../models/productModel');

const { NotFoundError } = require('../helpers/NotFoundError');

const productService = {
  async getAll() {
    const result = await productModel.getAll();
    return result;
  },
  async getById(id) {
    const result = await productModel.getById(id);
    if (!result) throw new NotFoundError('Product not found');
    return result[0];
  },
};

module.exports = productService;