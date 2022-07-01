const { expect } = require('chai');
const { stub } = require('sinon');
const saleController = require('../../../controllers/saleController');
const saleService = require('../../../services/saleService');
const status = require('../../../helpers/status');

const { salesStubResponse, salesStubData } = require('../../../helpers/stubMock');

describe('Testing saleController GET', () => {
  const request = {};
  const response = {};

  before(async () => { 
    response.status = stub().returns(response);
    response.json = stub().returns();

    stub(saleService, 'getAll').resolves(salesStubData);
  });
  after(() => {
    saleService.getAll.restore();
  });

  describe('Getting all sales', () => { 
    it('Should response 200 and a json with all sales', async () => {
      await saleController.getAll(request, response);
      expect(response.status.calledWith(status.HTTP_OK_REQUEST)).to.be.equal(true);
      expect(response.json.calledWith(salesStubData)).to.be.equal(true);
    });
  });
  describe('Getting sales by id', () => {
    before(async () => {
      response.status = stub().returns(response);
      response.json = stub().returns();

      stub(saleService, 'getById').resolves(salesStubResponse);

    });
    after(() => {
      saleService.getById.restore();
    });

    it('Should response 200 and a json with all sales Ids in the database', async() => {
      await saleController.getById(request, response);
      expect(response.status.calledWith(status.HTTP_OK_REQUEST)).to.be.equal(true);
      expect(response.json.calledWith(salesStubResponse)).to.be.equal(true);
    });
  });
});