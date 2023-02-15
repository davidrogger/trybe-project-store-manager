const { expect } = require('chai');
const { stub } = require('sinon');

const saleService = require('../../../services/saleService');
const { validate } = require('../../../services/validationService');

const saleController = require('../../../controllers/saleController');

const status = require('../../../helpers/status');


describe('Testing productController REMOVE', () => {
  const request = {};
  const response = {};

  before(async () => {
    response.status = stub().returns(response);
    response.json = stub().returns();

    stub(validate, 'id').resolves({ id: 1 });
    stub(saleService, 'getById').resolves();
    stub(saleService, 'remove').resolves();
  });
  after(() => {
    validate.id.restore();
    saleService.getById.restore();
    saleService.remove.restore();
  });

  describe('When data to remove is valid', () => {
    it('Should return status 204 no content', async () => {
      await saleController.remove(request, response);
      expect(validate.id.calledOnce).to.be.equal(true);
      expect(saleService.getById.calledOnce).to.be.equal(true);
      expect(saleService.remove.calledOnce).to.be.equal(true);
      expect(response.status.calledWith(status.HTTP_NO_CONTENT)).to.be.equal(true);
      expect(response.json.calledWith()).to.be.equal(true);

    });
  })

});