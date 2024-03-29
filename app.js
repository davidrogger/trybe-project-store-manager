require('express-async-errors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

const app = express();
const productRouter = require('./routers/productRouter');
const saleRouter = require('./routers/saleRouter');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/products', productRouter);
app.use('/sales', saleRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(errorHandler);

module.exports = app;