const { expect } = require('chai');
const { stub } = require('sinon');

const status = require('../../../helpers/status');

const { allProductsResponse, productSearchNameResponse } = require('../../../__tests__/_dataMock');

const productService = require('../../../services/productService');
const productController = require('../../../controllers/productController');

describe('Testing productController GET', () => {
  const request = {};
  const response = {};

  describe('Using getAll', () => {
    describe('When there is no product into the database', () => { 
        before(async () => {
          response.status = stub().returns(response);
          response.json = stub().returns();
    
          stub(productService, 'getAll').resolves([]);
        });
        after(() => {
          productService.getAll.restore();
        })

        it('Should response 200 json with empty array', async () => {
          await productController.getAll(request, response);
          expect(response.status.calledWith(status.HTTP_OK_REQUEST)).to.be.equal(true);
          expect(response.json.calledWith([])).to.be.equal(true);
        });
      });

    describe('When there is product into the database', () => { 
      before(async () => {
        response.status = stub().returns(response);
        response.json = stub().returns();

        stub(productService, 'getAll').resolves(allProductsResponse);
      });
      after(() => {
        productService.getAll.restore()
      });

        it('Should return a status 200 and a json with an array of products', async () => {
          await productController.getAll(request, response);
          expect(response.status.calledWith(status.HTTP_OK_REQUEST)).to.be.equal(true);
          expect(response.json.calledWith(allProductsResponse)).to.be.equal(true);
        });

      });
    });

  describe('Using getById', () => {
    // describe('When the id isn\'t a number', () => {
    //   before(async () => {
    //     request.params = { id: 'idNotValid' };

    //     request.status = stub().returns(response);
    //     request.json = stub().returns();

    //     stub(productService, 'getById').rejects();
    //   });
    //   after(() => {
    //     productService.getById.restore();
    //   })

    //   it('Should throw an error "ValidationError" with a message ""id" should be a number"', () => {
    //     try {
    //       await productController.getById(request, response);
    //     } catch (error) {
          
    //     }
    //   })
    // });
    
    describe('When the id is a number', () => {
      before(async () => {
        request.params = { id: 1 };

        response.status = stub().returns(response);
        response.json = stub().returns();

        stub(productService, 'getById').resolves(productSearchNameResponse[0]);
      });
      after(() => {
        productService.getById.restore();
      })

      it('Should response status 200 and a json with the product data', async () => {
        await productController.getById(request, response);
        expect(response.status.calledWith(status.HTTP_OK_REQUEST)).to.be.equal(true);
        expect(response.json.calledWith(productSearchNameResponse[0])).to.be.equal(true);
      });
    });
  })
});