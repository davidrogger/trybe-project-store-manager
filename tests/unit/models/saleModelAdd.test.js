const { expect } = require('chai');
const { stub } = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe.only('Testing saleModel ADD', () => {
  describe('When adding a sale', () => {
    before(async () => {
      stub(connection, 'query').resolves([{ insertId: 4 }]);
    });
    after(() => {
      connection.query.restore();
    });

    it('Should return an object with the sale "id"', async () => {
      const result = await saleModel.addSale();
      expect(result.id).to.be.equal(4);
    });
  });
});
