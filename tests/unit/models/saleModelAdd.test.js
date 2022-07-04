const { expect } = require('chai');
const { stub } = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

const { rightSaleBody } = require('../../../__tests__/_dataMock');
const id = 4;

describe('Testing saleModel ADD', () => {
  describe('addSale', () => {
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
  describe('soldProduct', () => {
    before(async () => {
      stub(connection, 'query').resolves();
    });
    after(() => {
      connection.query.restore();
    })

    it('Should connect to the data base to save the products', async () => {
      await saleModel.soldProduct(id, rightSaleBody[0])
      expect(connection.query.calledOnce).to.be.equal(true);
    });
  })
});
