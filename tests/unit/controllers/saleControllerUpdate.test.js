const { expect } = require("chai");
const { stub } = require('sinon');

const status = require('../../../helpers/status');
const saleController = require('../../../controllers/saleController');
const saleService = require('../../../services/saleService');
const productService = require('../../../services/productService');
const { validate } = require('../../../services/validationService');

const { rightSaleBody } = require('../../dataMock');

const saleUpdatedResponse = {
  saleId: 1,
  itemsUpdated: rightSaleBody
};

describe('Testing saleController UPDATE', () => {
  const request = {};
  const response = {};
  describe('When updating a sale', () => { 
    // describe('When the product information is invalid', () => { });
    describe('When the product information is valid', () => {
      before(async () => {
        request.body = rightSaleBody;
        response.status = stub().returns(response);
        response.json = stub().returns();

        stub(validate, 'id').resolves({ id: 1 });
        stub(validate, 'productSalesBody').resolves({ sales: rightSaleBody});
        stub(productService, 'getById').resolves();
        stub(saleService, 'getById').resolves();
        stub(saleService, 'update').resolves(saleUpdatedResponse);

      });
      after(() => {
        validate.id.restore();
        validate.productSalesBody.restore();
        saleService.getById.restore();
        productService.getById.restore();
        saleService.update.restore();
      });

      it('Should response 200 json with "saleId" and the products sold updated', async () => {
        await saleController.update(request, response);
        expect(productService.getById.called).to.be.equal(true);
        expect(saleService.getById.called).to.be.equal(true);
        expect(response.status.calledWith(status.HTTP_OK_REQUEST)).to.be.equal(true);
        expect(response.json.calledWith(saleUpdatedResponse)).to.be.equal(true);
      })
    });
  });
});