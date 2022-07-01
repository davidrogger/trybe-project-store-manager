
const { expect } = require('chai');
const { stub } = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe('Testing saleModel GET', () => {
  describe('Getting all sales', () => {
    before(async () => {
      stub(connection, 'query').resolves([[{}]])
    });
    after(() => {
      connection.query.restore();
    });

    it('Should return an array of objects', async () => {
      const result = await saleModel.getAll();
      expect(result).to.be.an('array');
      expect(result[0]).to.be.an('object');
      expect(result).not.to.be.empty;
    });
  });
  describe('Getting sales by Id', () => { 
    describe('When the id is not found', () => {
      it('Should return an empty array', async () => {
        const result = await saleModel.getById({});
        expect(result).to.be.an('array');
        expect(result).to.be.empty;
      });
    });
    describe('When the id is found', () => { });
  });
})