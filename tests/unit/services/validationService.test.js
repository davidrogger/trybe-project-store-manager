const { validate } = require('../../../services/validationService');

const { expect } = require('chai');
const { stub } = require('sinon');
const Joi = require('joi');

describe('Testing validationService', () => {
  describe('Validating an "id"', () => {
    describe("When the id is valid", () => {
      it("Should return the id type number", () => {
        const validIDs = ["1", "2", "3", "4", "5"];
        validIDs.map(async (validId) => {
          const { id } = await validate.id({ id: validId })
          expect(typeof(id)).to.be.equal('number');
          expect(typeof(id)).not.to.be.equal('string');
          expect(id).to.be.equal(Number(validId));
        })
      })
    });
    describe("When the id is invalid", () => {});
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