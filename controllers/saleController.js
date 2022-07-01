const status = require('../helpers/status');
const saleService = require('../services/saleService');

const saleController = {
  async getAll(_req, res) { 
    const result = await saleService.getAll();
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
};

module.exports = saleController;