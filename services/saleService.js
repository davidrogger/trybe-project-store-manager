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
  async add(products) {
    const { id } = await saleModel.addSale();
    await Promise.all(products.map((product) => saleModel.soldProduct(id, product)));
    return { id, itemsSold: products };
  },
  async remove({ id }) {
    await saleModel.remove({ id });
  },
  async update({ id, sales }) {
    await saleModel.removeProducts(id);
    await Promise.all(sales.map((product) => saleModel.soldProduct(id, product)));
    return { saleId: id, itemsUpdated: sales };
  },
};

module.exports = saleService;