const { validate } = require('../../../services/validationService');

const { expect } = require('chai');

describe('Testing validationService', () => {
  describe('Validating an "id"', () => {
    describe("When the id is valid", () => {
      it("Should return the id type number", async () => {
        const { id } = await validate.id({ id: "1" })
          expect(typeof(id)).to.be.equal('number');
          expect(typeof(id)).not.to.be.equal('string');
          expect(id).to.be.equal(1);
      })
    });
    describe("When the id is invalid", () => {
      it('Should throw an error', async () => {
          try {
            await validate.id({ id: 'a'})
          } catch (error) {
            expect(error.name).to.be.equal("ValidationError");
            expect(error.message).to.be.equal('"id" must be a number');
          }

      })
    });
  });
  describe('Validating an "productBody"', () => {
    describe("When the body is valid", () => {});
    describe("When the body is invalid", () => {});
  });
  describe('Validating an "productSalesBody"', () => {
    describe("When the body is valid", () => {});
    describe("When the body is invalid", () => {});
  });
});