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
  async add({ name }) {
    const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [result] = await connection.query(query, [name]);
    return { id: result.insertId };
  },
};

module.exports = productModel;