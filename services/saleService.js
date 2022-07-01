const saleModel = require('../models/saleModel');

const saleService = {
  async getAll() {
    const result = await saleModel.getAll();
    return result;
  },
};

module.exports = saleService;