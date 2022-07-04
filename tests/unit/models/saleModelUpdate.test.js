const { expect } = require('chai');
const { stub } = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe('Testing saleModel UPDATE', () => {
  afterEach(() => {
    connection.query.restore();
  });
  describe('Updating sale', () => {
    it('Should call connection with the database to update the data', async () => {
      stub(connection, 'query').resolves();
      await saleModel.update({});
      expect(connection.query.called).to.be.equal(true);
    })
  })
});