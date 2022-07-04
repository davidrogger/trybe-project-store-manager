const { expect } = require('chai');
const { stub } = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe('Testing saleModel REMOVE', () => {
  beforeEach(async () => {
    stub(connection, 'query').resolves();
  })
  afterEach(() => {
    connection.query.restore();
  });
  describe('Removing a sale', () => {
    it('Should call connection with the database to remove the data', async () => {
      await saleModel.remove({});
      expect(connection.query.called).to.be.equal(true);
    })
  });
  describe('Removing products from a sale', () => {
    it('Should call connection with the database to remove the products from the data', async () => {
      await saleModel.removeProducts({});
      expect(connection.query.called).to.be.equal(true);
    });
  });
});