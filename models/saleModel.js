const connection = require('./connection');

const queryGetAll = `
    SELECT
      sales_products.sale_id AS saleId,
      sales.date, products.id AS productId,
      sales_products.quantity
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales ON sales.id = sales_products.sale_id
    INNER JOIN StoreManager.products ON sales_products.product_id = products.id
    `;

const saleModel = {
  async getAll() {
    const [result] = await connection.query(queryGetAll);
    return result;
  },
  async getById({ id }) {
    const paramsId = 'HAVING(sales_products.sale_id = ?)';
    const query = queryGetAll + paramsId;
    const [result] = await connection.query(query, [id]);
    return result;
  },
  async addSale() {
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (now())';
    const [result] = await connection.query(query);
    return { id: result.insertId };
  },
  async soldProduct(id, { productId, quantity }) {
    const query = `
    INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?);
    `;
    await connection.query(query, [id, productId, quantity]);
  },
  async remove({ id }) {
    const query = `
    DELETE FROM StoreManager.sales
    WHERE id = ?
    `;
    await connection.query(query, [id]);
  },
};

module.exports = saleModel;