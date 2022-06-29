const connection = require('./connection');

const productModel = {
  async getAll() {
    const query = 'SELECT * FROM StoreManager.products';
    const [result] = await connection.query(query);
    return result;
  },
  async getById(id) {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [result] = await connection.query(query, [id]);
    return result;
  },
};

module.exports = productModel;