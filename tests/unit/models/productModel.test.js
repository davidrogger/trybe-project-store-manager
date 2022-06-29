const { expect } = require('chai');
const { stub } = require('sinon');

const productModel = require('../../../models/productModel');
const connection = require('../../../models/connection');

// reaproveitando mock criado pela trybe
const { allProductsResponse } = require('../../../__tests__/_dataMock');

// Apenas valores simbólicos devido ao stub, esse valores não tem importância.
const NOT_FOUND_ID = 999;
const FOUND_ID = 1;

describe('Testing productModel', () => {
  describe('Getting all products', () => {
    describe('When there is no product into the database', () => {
      before(async () => {
        stub(connection, 'query').resolves([[]]);
      });
      after(() => connection.query.restore());

      it('Should return an empty array', async () => {
        const result = await productModel.getAll();
        expect(result).to.be.an('array');
        expect(result).to.be.empty;
      });
    });
    describe('When there is products into the database', () => {
      before(async () => {
        stub(connection, 'query').resolves([allProductsResponse]);
      });
      after(() => connection.query.restore());

      it('Should return an array of objects', async () => {
        const result = await productModel.getAll();
        expect(result).not.to.be.empty;
        expect(result[0]).to.be.an('object');
      });
      it('Should have in each object the keys "id" and "name"', async () => {
        const result = await productModel.getAll();
        result.forEach((item) => expect(item).to.includes.all.keys('id', 'name'));
      });
    })
  })
  describe('Getting products by id', () => {
    describe('When the id is not found', () => {
      it('Should return an empty array', async () => {
        const [result] = await productModel.getById(NOT_FOUND_ID);
        expect(result).to.be.an('array');
        expect(result).to.be.empty;
      })
    });
    describe('When the id is found', () => {
      it('Should return an object', async () => {
        const result = await productModel.getById(FOUND_ID);
        expect(result).to.be.an('object');
      });
      it('Should have the keys "id" and "name"', async () => {
        const result = await productModel.getById(FOUND_ID);
        expect(result).to.includes.all.keys('id', 'name');
      })
    });
  })
});