const { expect } = require('chai');
const { stub } = require('sinon');
const productService = require('../../../services/productService');
const { validate } = require('../../../services/validationService');
const productController = require('../../../controllers/productController');

const status = require('../../../helpers/status');

describe('Testing productController REMOVE', () => {
  const request = {};
  const response = {};
  // describe('When the data to remove is invalid', () => {})

  before(async () => {
    response.status = stub().returns(response);
    response.json = stub().returns();

    stub(validate, 'id').resolves({ id: 1 });
    stub(productService, 'getById').resolves();
    stub(productService, 'remove').resolves();
  });
  after(() => {
    validate.id.restore();
    productService.getById.restore();
    productService.remove.restore();
  });

  describe('When data to remove is valid', () => {
    it('Should return status 204 no content', async () => {
      await productController.remove(request, response);
      expect(productService.getById.calledOnce).to.be.equal(true);
      expect(productService.remove.calledOnce).to.be.equal(true);
      expect(response.status.calledWith(status.HTTP_NO_CONTENT)).to.be.equal(true);
      expect(response.json.calledWith()).to.be.equal(true);

    });
  })

});