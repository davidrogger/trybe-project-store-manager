const { validate } = require('../../../services/validationService');

const { expect } = require('chai');
const { valid } = require('joi');

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
    it("Should return the sales body when the body is valid", async () => {
      const sales = [
        {
          productId: 2,
          quantity: 5
        }
      ];
      const { sales: validateSales } = await validate.productSalesBody({ sales });
      expect(validateSales).to.be.deep.equal(sales);
    });
    describe("When the body is invalid", () => {
      it("Should throw an error when missing 'productId' or 'quantity'", async () => {
        const missingFields = [
          {
            missing: "productId",
            sales: [{ quantity: 2 }]
          },
          {
            missing: "quantity",
            sales: [{ productId: 2 }]
          }
        ];

        for (const product of missingFields) {
          const { missing, sales } = product;
          try {
            await validate.productSalesBody({ sales });
          } catch (error) {
            expect(error.name).to.be.equal('ValidationError');
            expect(error.message).to.be.equal(`"${missing}" is required`);
          } 
        }
      })
      it("Should throw an error when 'quantity' and 'productId' values are not number", async () => {
        const missingFields = [
          {
            field: "productId",
            sales: [{ productId: 'invalid', quantity: 2 }]
          },
          {
            field: "quantity",
            sales: [{ productId: 2, quantity: 'invalid' }]
          }
        ];

        for (const product of missingFields) {
          const { field, sales } = product;
          try {
            await validate.productSalesBody({ sales });
          } catch (error) {
            expect(error.name).to.be.equal('ValidationError');
            expect(error.message).to.be.equal(`"${field}" must be a number`);
          } 
        }
      })
    });
  });
});