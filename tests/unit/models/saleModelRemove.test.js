const { expect } = require('chai');
const { stub } = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe('Testing saleModel REMOVE', () => {
  afterEach(() => {
    connection.query.restore();
  });
  describe('Removing a sale', () => {
    it('Should call connection with the database to remove the data', async () => {
      stub(connection, 'query').resolves();
      await saleModel.remove({});
      expect(connection.query.called).to.be.equal(true);
    })
  })
});