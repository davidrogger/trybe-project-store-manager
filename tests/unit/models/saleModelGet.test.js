
const { expect } = require('chai');
const saleProduct = require('../../../models/saleModel');

describe('Testing saleModel GET', () => {
  describe.only('Getting all sales', () => {
    it('Should return an array of objects', async () => {
      const result = await saleProduct.getAll();
      expect(result).to.be.an('array');
      expect(result).to.be.empty;
    });
  });
  // describe('Getting sales by Id', () => { });
})