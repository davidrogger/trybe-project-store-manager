const { expect } = require('chai');
const { stub } = require('sinon');
const Joi = require('joi');
const productService = require('../../../services/productService');

const schema = Joi.object();

describe('Testing productService Validator', () => {
  afterEach(() => {
      schema.validate.restore();
  });
  describe('Validating an "id"', () => {
    describe('When the id is invalid', () => {
      before(async () => {
        stub(schema, 'validate').resolves({ error: { name: 'ValidationError' } });
      });

      it('Should throw an error', async () => {
        try {
          await productService.validateId({ id: 'a' })
        } catch (error) {
          expect(error.name).to.be.equal('ValidationError');
        }
      });
    });

    describe('When the id is valid', () => {
      before(async () => {
        stub(schema, 'validate').resolves({ value: { id: 1 } });
      });      

      it('Should return an object with the id', async () => {        
        const result = await productService.validateId({ id: '1' });
        expect(result).to.deep.equal({ id: 1 })
        expect(result).not.to.deep.equal({ id: '1' });
      });

    });
  })

  // describe('Validating a product format update/create resquest', () => {
  //   describe('When the body is invalid', () => {
  //     it('Should throw an error', () => {

  //     })
  //   });
  //   describe('When the format is valid', () => { 
  //     it('Should return an object with the product data', () => {

  //     });
  //   });
  // });
});
