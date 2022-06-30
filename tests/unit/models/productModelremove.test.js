const { expect } = require('chai');
const { stub } = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

describe('Testing productModel REMOVE', () => {
  afterEach(() => {
    connection.query.restore();
  });
  describe('Removing a product', () => {
    it('Should call connection with the database to remove the data', async () => {
      stub(connection, 'query').resolves();
      await productModel.remove({});
      expect(connection.query.called).to.be.equal(true);
    })
  })
});