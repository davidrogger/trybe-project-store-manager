const Joi = require('joi');
const productModel = require('../models/productModel');
const { runSchema } = require('./validator');
const { NotFoundError } = require('../helpers/NotFoundError');

const productService = {
  validateId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),
  async getAll() {
    const result = await productModel.getAll();
    return result;
  },
  async getById(id) {
    const result = await productModel.getById(id);
    if (result.length === 0) throw new NotFoundError('Product not found');
    return result[0];
  },
};

module.exports = productService;