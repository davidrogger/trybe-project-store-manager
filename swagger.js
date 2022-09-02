const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Project Storage Manager',
    description: 'Meu primeiro CRUD API aplicando arquitetura MSC',
  },
  tags: [
    {
      name: 'Products',
      description: 'Endpoints',
    },
    {
      name: 'Sales',
      description: 'Endpoints',
    },
  ],
  definitions: {
    Product: {
      id: 1,
      name: 'Martelo de Thor',
    },
    addProduct: {
      name: 'Life Stone',
    },
    newProduct: {
      id: 1,
      name: 'Life Stone',
    },
    Sale: [
      {
        date: '2022-09-02T20:03:53.000Z',
        productId: 1,
        quantity: 5,
      },
    ],
    addSale: [
      {
        productId: 2,
        quantity: 5,
      },
    ],
  },
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);