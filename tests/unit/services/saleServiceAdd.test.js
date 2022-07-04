const { expect } = require('chai');
const { stub } = require('sinon');
const saleModel = require('../../../models/saleModel');
const saleService = require('../../../services/saleService');

const { rightSaleBody } = require('../../../__tests__/_dataMock');

describe('Testing saleService ADD', () => {
  before(async () => {
    stub(saleModel, 'addSale').resolves({ id: 4 });
    stub(saleModel, 'soldProduct').resolves(rightSaleBody);
  });
  after(() => {
    saleModel.addSale.restore();
    saleModel.soldProduct.restore();
  });

  describe('When a sale is requested', () => {
    it('Should return an object with the sale id and the list of product sold', async () => {
      const result = await saleService.add(rightSaleBody);
      expect(result.id).to.be.equal(4);
      expect(result.itemsSold).to.deep.equal(rightSaleBody);
    });
  });
});