const saleModel = require('../models/saleModel');
const { NotFoundError } = require('../helpers/NotFoundError');

const saleService = {
  async getAll() {
    const result = await saleModel.getAll();
    return result;
  },
  async getById({ id }) {
    const result = await saleModel.getById({ id });
    if (result.length === 0) throw new NotFoundError('Sale not found');
    return result;
  },
};

module.exports = saleService;