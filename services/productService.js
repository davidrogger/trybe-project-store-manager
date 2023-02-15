const productModel = require('../models/productModel');
const { NotFoundError } = require('../helpers/NotFoundError');

const productService = {
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
  async remove({ id }) {
    await productModel.remove({ id });
  },
  async getByName({ q }) {
    if (!q) {
      return this.getAll();
    }
    const result = await productModel.getByName({ name: `%${q}%` });
    return result;
  },
};

module.exports = productService;