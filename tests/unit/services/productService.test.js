const { expect } = require('chai');
const { stub } = require('sinon');

const { allProductsResponse, productSearchNameResponse } = require('../../../__tests__/_dataMock');

const productModel = require('../../../models/productModel');

const productService = {
  getAll: () => { },
  getById: () => { },
};

describe('Testing productService', () => {
  describe('Getting all products', () => {
    describe('When there is no product into the database', () => {
      before(async () => {
        stub(productModel, 'getAll').resolves([]);
      });
      after(() => productModel.getAll.restore());

      it('Should return an empty array', async () => {
        const result = await productService.getAll();
        expect(result).to.be.an('array');
        expect(result).to.be.empty;

      });
    });
    describe('When there is products into the database', () => {
      before(async () => {
        stub(productModel, 'getAll').resolves(allProductsResponse);
      });
      after(() => productModel.getAll.restore());
      
      it('Should return an array of objects', async () => {
        const result = await productService.getAll();
        expect(result).not.to.be.empty;
        expect(result[0]).to.be.an('object');
      });
      it('Should have in each object the keys "id" and "name"', async () => {
        const result = await productService.getAll();
        result.forEach((item) => expect(item).to.includes.all.keys('id', 'name'));
      });
    })
    describe('Getting products by id', () => {
      describe('When the id is not found', () => {
        before(async () => {
          stub(productModel, 'getById').resolves([]);
        });
        after(() => productModel.getById.restore());

        it('Should throw an error "NotFound"', async () => {
          try {
            await productService.getById();
          } catch (error) {
            expect(error).to.be.equal(true);
            expect(error.name).to.be.equal('ErrorNotFound');
          }
        })
      });
      describe('When the id is found', () => {
        before(async () => {
          stub(productModel, 'getById').resolves(productSearchNameResponse);
        });
        after(() => productModel.getById.restore());
      
        it('Should return an objects', async () => {
          const result = await productService.getById();
          expect(result).to.be.an('objects');
        });

        it('Should have the keys "id" with the value "1" and "name" with the value "Martelo de Thor" ', async () => {
          const result = await productService.getById();
          expect(result.id).to.be.equal(1);
          expect(result.name).to.be.equal('Martelo de Thor');
        })
      });
    });
  });
});