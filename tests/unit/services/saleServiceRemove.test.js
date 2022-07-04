const { expect } = require('chai');
const { stub } = require('sinon');
const saleService = require('../../../services/saleService');
const saleModel = require('../../../models/saleModel');

describe('Testing saleService REMOVE', () => {
  describe('Removing sale', () => {
    before(async () => {
      stub(saleModel, 'remove').resolves();
    });
    after(() => {
      saleModel.remove.restore();
    });

    it('Should call model Remove', async () => {
      await saleService.remove({});
      expect(saleModel.remove.called).to.be.equal(true);
    })
  })
});