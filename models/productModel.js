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
  async update({ id, name }) {
    const query = `
      UPDATE StoreManager.products
      SET name = ?
      WHERE id = ?;
    `;
    await connection.query(query, [name, id]);
  },
  async remove({ id }) {
    const query = `
    DELETE FROM StoreManager.products
    WHERE id = ?;
    `;
    await connection.query(query, [id]);
  },
  async getByName({ name }) {
    const query = `
      SELECT * FROM StoreManager.products
      WHERE name LIKE ?;
      `;
    const [result] = await connection.query(query, [name]);
    return result;
  },
};

module.exports = productModel;