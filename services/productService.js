const Joi = require('joi');
const productModel = require('../models/productModel');
const { runSchema } = require('./validator');
const { NotFoundError } = require('../helpers/NotFoundError');

const productService = {
  validateId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),
  validateProductBody: runSchema(Joi.object({
    name: Joi.string().min(5).required(),
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
  async add({ name }) {
    const { id } = await productModel.add({ name });
    return { id, name };
  },
  async update({ id, name }) {
    await productModel.update({ id, name });
  },
};

module.exports = productService;