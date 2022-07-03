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
    const query = 'INSERT INTO ManagerStore.sales (date) VALUES (default)';
    const [result] = await connection.query(query);
    return { id: result.insertId };
  },
};

module.exports = saleModel;