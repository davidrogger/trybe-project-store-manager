const { expect } = require('chai');
const { stub } = require('sinon');
const saleService = require("../../../services/saleService");
const saleModel = require("../../../models/saleModel");

const { salesStubResponse } = require('../../../helpers/stubMock');

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
      before(async () => {
        stub(saleModel, 'getById').resolves([])
      });
      after(() => {
        saleModel.getById.restore();
      });

      it('Should throw an error "ErrorNotFound"', async () => {
        try {
          await saleService.getById({});
        } catch (error) {
          expect(error.name).to.be.equal('ErrorNotFound');
          expect(error.name).not.to.be.equal('pao com ovo');
        }        
      });
    });
    describe('When the id is found', () => { 
      const saleId = { id: 1 };

      before(async () => {
        stub(saleModel, 'getById').resolves(salesStubResponse);
      });
      after(() => {
        saleModel.getById.restore();
      });
      it('Should return an array of objects with the same id requested', async () => {
        const result = await saleService.getById(saleId);
        result.forEach((sale) => { 
          expect(sale.saleId).to.be.equal(saleId.id);
        });
      });
    });
  });
});
