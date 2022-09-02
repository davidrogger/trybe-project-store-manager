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
    Products: [
      {
        id: 1,
        name: 'Martelo de Thor',
      },
      {
        id: 2,
        name: 'Traje de encolhimento',
      },
      {
        id: 3,
        name: 'Escudo do Capitão América',
      },
    ],
    Product: {
      id: 1,
      name: 'Martelo de Thor',
    },
    addProduct: {
      name: 'Life Stone',
    },
    Sales: [
      {
        saleId: 1,
        date: '2022-09-01T21:08:18.000Z',
        productId: 1,
        quantity: 5,
      },
      {
        saleId: 1,
        date: '2022-09-01T21:08:18.000Z',
        productId: 2,
        quantity: 10,
      },
      {
        saleId: 2,
        date: '2022-09-01T21:08:18.000Z',
        productId: 3,
        quantity: 15,
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