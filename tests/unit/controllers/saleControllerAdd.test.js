const { expect } = require("chai");
const { stub } = require('sinon');

const status = require('../../../helpers/status');
const saleController = require('../../../controllers/saleController');
const saleService = require('../../../services/saleService');
const productService = require('../../../services/productService');

const { rightSaleBody, saleCreateResponse } = require('../../../__tests__/_dataMock');

describe('Testing saleController ADD', () => {
  const request = {};
  const response = {};
  describe('When add a sale', () => { 
    // describe('When the product information is invalid', () => { });
    describe('When the product information is valid', () => {
      before(async () => {
        request.body = rightSaleBody;
        response.status = stub().returns(response);
        response.json = stub().returns();

        stub(saleService, 'validateProductSale').resolves(rightSaleBody);
        stub(productService, 'getById').resolves();
        stub(saleService, 'add').resolves(saleCreateResponse);

      });
      after(() => {
        saleService.validateProductSale.restore();
        productService.getById.restore();
        saleService.add.restore();
      });

      it('Should response 200 json with the sale "id" and the products sold', async () => {
        await saleController.add(request, response);
        expect(response.status.calledWith(status.HTTP_OK_CREATED)).to.be.equal(true);
        expect(response.json.calledWith(saleCreateResponse)).to.be.equal(true);
      })
    });
  });
});