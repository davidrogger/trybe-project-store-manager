const productModel = require('../models/productModel');

const productService = {
  async getAll() {
    const result = await productModel.getAll();
    return result;
  },
};

module.exports = productService;