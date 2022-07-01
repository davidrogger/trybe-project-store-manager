const saleModel = require('../models/saleModel');

const saleService = {
  async getAll() {
    const result = await saleModel.getAll();
    return result;
  },
  async getById({ id }) {
    console.log(id);
  },
};

module.exports = saleService;