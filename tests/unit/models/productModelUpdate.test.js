const { expect } = require('chai');
const { stub } = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

describe('Testing productModel UPDATE', () => {
  afterEach(() => {
    connection.query.restore();
  });
  describe('Updating product name', () => {
    it('Should call connection with the database to update the data', async () => {
      stub(connection, 'query').resolves();
      await productModel.update({});
      expect(connection.query.called).to.be.equal(true);
    })
  })
});