const { expect } = require('chai');
const { stub } = require('sinon');
const productService = require('../../../services/productService');
const productModel = require('../../../models/productModel');

describe('Testing productService REMOVE', () => {
  afterEach(() => {
    productModel.remove.restore();
  });
  describe('Removing product', () => {
    it('Should call model Remove', async () => {
      stub(productModel, 'remove').resolves();
      await productService.remove({});
      expect(productModel.remove.called).to.be.equal(true);
    })
  })
});