const Joi = require('joi');
const saleModel = require('../models/saleModel');
const { NotFoundError } = require('../helpers/NotFoundError');
const { runSchema } = require('./validator');

const saleService = {
  validateProductSale: runSchema(Joi.object({
    sales: Joi.array().items(
      Joi.object({
        productId: Joi.number().label('productId').integer().positive()
          .required(),
        quantity: Joi.number().label('quantity').min(1).required(),
      }).required(),
    ).required(),
  })),
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
};

module.exports = saleService;