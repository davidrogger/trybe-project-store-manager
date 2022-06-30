const { expect } = require('chai');
const { stub } = require('sinon');
const productService = require('../../../services/productService');
const productModel = require('../../../models/productModel');

describe('Testing productService Validator', () => {
  afterEach(() => {
    productModel.update.restore();
  });
  describe('Validating an "id"', () => {
    describe('When the id is invalid', () => {
      it('Should throw an error', async () => {
        
      });
    });

    describe('When the id is valid', () => {
      it('Should return an object with the id', async () => {
        
      });

    });
  })

  describe('Validating a product format update/create resquest', () => {
    describe('When the body is invalid', () => {
      it('Should throw an error', () => {

      })
    });
    describe('When the format is valid', () => { 
      it('Should return an object with the product data', () => {

      });
    });
  });
});
