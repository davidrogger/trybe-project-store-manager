const { expect } = require('chai');
const { stub } = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

const { rightProductBody } = require('../../dataMock');

describe('Testing productModel ADD', () => {
  before(async () => {
    stub(connection, 'query').resolves([{ insertId: 4 }]);
  });
  after(() => {
    connection.query.restore();
  })

  it('Should return an object with the id of the product created', async () => {
    const result = await productModel.add(rightProductBody);
    expect(result).to.deep.equal({ id: 4 });
  });
});