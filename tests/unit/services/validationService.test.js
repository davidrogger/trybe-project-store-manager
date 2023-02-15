const { validate } = require('../../../services/validationService');

const { expect } = require('chai');

describe('Testing validationService', () => {
  describe('Validating an "id"', () => {
    it("Should return the id type number when the id is valid", async () => {
      const { id } = await validate.id({ id: "1" })
      expect(typeof(id)).to.be.equal('number');
      expect(typeof(id)).not.to.be.equal('string');
      expect(id).to.be.equal(1);
    });
    it("Should throw an error when the id is invalid", async () => {
      try {
        await validate.id({ id: 'a'})
      } catch (error) {
        expect(error.name).to.be.equal("ValidationError");
        expect(error.message).to.be.equal('"id" must be a number');
      }
    });
  });

  describe('Validating a "productBody"', () => {
    it("Should return the product body when the body is valid", async () => {
      const product = { name: "Testing Weapon" };
      const validateBody = await validate.productBody(product);
      expect(validateBody).to.be.deep.equal(product);
    });
    it("Should throw an error when the body is invalid", async () => {
      try {
        await validate.productBody({})
      } catch (error) {
        expect(error.name).to.be.equal("ValidationError");
        expect(error.message).to.be.equal('"name" is required');
      }
    });
  });

  describe('Validating a "productSalesBody"', () => {
    it("Should return the sales body when the body is valid", async () => {});
    it("Should throw an error when the body is invalid", async () => {});
  });
});