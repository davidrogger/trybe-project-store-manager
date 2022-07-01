const { expect } = require("chai");
const saleService = require("../../../services/saleService");

describe.only('Testing sale Service GET', () => {
  describe('Getting all sales', () => {
    it('Should return an array of objects and call the model responsable to get into the database', async () => {
      const result = await saleService.getAll();
      expect(result).to.be.an('array');
      expect(result[0]).to.be.an('object');

    });
  });
  // describe('Getting sales by id', () => { });
});
