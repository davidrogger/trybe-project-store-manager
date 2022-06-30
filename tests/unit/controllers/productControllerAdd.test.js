const { expect } = require('chai');
const { stub } = require('sinon');

const { productCreateResponse, rightProductBody } = require('../../../__tests__/_dataMock');

const status = require('../../../helpers/status');

const productController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('Testing productControler ADD', () => {
  const request = {};
  const response = {};
  describe('When the body is correct', () => {
    before(async () => {
      request.body = rightProductBody;
      response.status = stub().returns(response);
      response.json = stub().returns();

      stub(productService, 'validateProductBody').resolves(rightProductBody)
      stub(productService, 'add').resolves(productCreateResponse)
    })
    it('Should response 201 with a json "id" 4 and name "Produto1"', async () => {
      await productController.add(request, response);
      expect(response.status.calledWith(status.HTTP_OK_CREATED)).to.be.equal(true);
      expect(response.json.calledWith(productCreateResponse)).to.be.equal(true);

    });
  });
});