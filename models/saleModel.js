const connection = require('./connection');

const saleModel = {
  async getAll() {
    const query = `
    SELECT
      sales_products.sale_id AS saleId,
      sales.date, products.id AS productId,
      sales_products.quantity
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales ON sales.id = sales_products.sale_id
    INNER JOIN StoreManager.products ON sales_products.product_id = products.id;
    `;
    const [result] = await connection.query(query);
    return result;
  },
  async getById({ id }) {
    console.log(id);
  },
};

module.exports = saleModel;