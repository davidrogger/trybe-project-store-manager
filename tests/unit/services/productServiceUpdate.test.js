const { expect } = require('chai');
const { stub } = require('sinon');
const productService = require('../../../services/productService');
const productModel = require('../../../models/productModel');

describe('Testing productService UPDATE', () => {
  afterEach(() => {
    productModel.update.restore();
  });
  describe('Updating product name', () => {
    it('Should call model Update', async () => {
      stub(productModel, 'update').resolves();
      await productService.update({});
      expect(productModel.update.called).to.be.equal(true);
    })
  })
});