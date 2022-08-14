const { expect } = require('chai');
const { stub } = require('sinon');
const saleModel = require('../../../models/saleModel');
const saleService = require('../../../services/saleService');

const { rightSaleBody } = require('../../dataMock');

describe('Testing saleService UPDATE', () => {
  before(async () => {
    stub(saleModel, 'removeProducts').resolves();
    stub(saleModel, 'soldProduct').resolves();
  });
  after(() => {
    saleModel.removeProducts.restore();
    saleModel.soldProduct.restore();
  });

  describe('When a sale updated is requested', () => {
    it('Should return an object with the sale id and the list of product sold', async () => {
      const result = await saleService.update({ id: 1, sales: rightSaleBody });
      expect(saleModel.removeProducts.called).to.be.equal(true);
      expect(saleModel.soldProduct.called).to.be.equal(true);
      expect(result.saleId).to.be.equal(1);
      expect(result.itemsUpdated).to.be.an('array');
    });
  });
});