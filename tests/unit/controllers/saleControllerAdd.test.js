const { expect } = require("chai");
const { stub } = require('sinon');

const status = require('../../../helpers/status');
const saleController = require('../../../controllers/saleController');

describe.only('Testing saleController ADD', () => {
  const request = {};
  const response = {};
  describe('When add a sale', () => { 
    // describe('When the product information is invalid', () => { });
    describe('When the product information is valid', () => {
      before(async () => {
        response.status = stub().returns(response);
        response.json = stub().returns();
      });
      after(() => {

      });

      it('Should response 200 json with the sale "id" and the products sold', async () => {
        await saleController.add(request, response);
        expect(response.status.calledWith(status.HTTP_OK_REQUEST)).to.be.equal(true);
        expect(response.json.calledWith(status.HTTP_OK_REQUEST)).to.be.equal(true);
      })
    });
  });
});