
const { expect } = require('chai');
const { stub } = require('sinon');
const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

const { productCreateResponse, rightProductBody } = require('../../../__tests__/_dataMock');

describe('Testing productService ADD', () => {
  before(async () => {
    stub(productModel, 'add').resolves({ id: 4 });
  });
  after(() => {
    productModel.add.restore();
  });

  it('Should return an object with the id and name of the product inserted into the database', async () => {
    const result = await productService.add(rightProductBody);
    expect(result).to.deep.equal(productCreateResponse);
  });

});
