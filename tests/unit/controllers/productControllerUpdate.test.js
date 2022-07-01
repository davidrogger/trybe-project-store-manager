const { expect } = require('chai');
const { stub } = require('sinon');
const productService = require('../../../services/productService');
const productController = require('../../../controllers/productController');

const status = require('../../../helpers/status');

describe('Testing productController UPDATE', () => {
  const request = {};
  const response = {};
  // describe('When the data to update is invalid', () => {})

  before(async () => {
    response.status = stub().returns(response);
    response.json = stub().returns();

    stub(productService, 'validateId').resolves({ id: 1 });
    stub(productService, 'validateProductBody').resolves({ name: 'Product Change' });
    stub(productService, 'getById').resolves();
    stub(productService, 'update').resolves();
  });
  after(() => {
    productService.validateId.restore();
    productService.validateProductBody.restore();
    productService.getById.restore();
    productService.update.restore();
  });

  describe('When data to update is valid', () => {
    it('Should return status 200 json with "id" and "name"', async () => {
      await productController.update(request, response);
      expect(productService.getById.calledOnce).to.be.equal(true);
      expect(productService.update.calledOnce).to.be.equal(true);
      expect(response.status.calledWith(status.HTTP_OK_REQUEST)).to.be.equal(true);
      expect(response.json.calledWith({ id: 1, name: 'Product Change' })).to.be.equal(true);

    });
  })

});