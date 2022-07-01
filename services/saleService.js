const saleModel = require('../models/saleModel');
const { NotFoundError } = require('../helpers/NotFoundError');

const saleService = {
  removeSaleId: (sales) => sales
      .map(({ date, productId, quantity }) => ({ date, productId, quantity })),
  async getAll() {
    const result = await saleModel.getAll();
    return result;
  },
  async getById({ id }) {
    const result = await saleModel.getById({ id });
    if (result.length === 0) throw new NotFoundError('Sale not found');
    return this.removeSaleId(result);
  },
};

module.exports = saleService;