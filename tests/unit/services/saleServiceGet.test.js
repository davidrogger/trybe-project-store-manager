const { expect } = require('chai');
const { stub } = require('sinon');
const saleService = require("../../../services/saleService");
const saleModel = require("../../../models/saleModel");

describe('Testing sale Service GET', () => {
  describe('Getting all sales', () => {
    before(async () => {
      stub(saleModel, 'getAll').resolves([{}]);
    });
    after(() => {
      saleModel.getAll.restore();
    })

    it('Should return an array of objects and call the model responsable to get into the database', async () => {
      const result = await saleService.getAll();
      expect(saleModel.getAll.calledOnce).to.be.equal(true);
      expect(result).to.be.an('array');
      expect(result[0]).to.be.an('object');

    });
  });
  describe('Getting sales by id', () => { 
    describe('When the id is not found', () => {
      it('Should throw an error "NotFoundError"', () => {
        expect(async () => saleService.getById({ id: 10 })).to.throw();
      });
    });
  });
});
