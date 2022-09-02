const status = require('../helpers/status');
const saleService = require('../services/saleService');
const productService = require('../services/productService');

const validate = require('../services/validator');

const saleController = {
  async getAll(_req, res) { 
    const result = await saleService.getAll();
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async getById(req, res) {
    /*  #swagger.tags = ['Sales']
        #swagger.description = 'Rota responsável por procurar uma venda com base no ID fornecido.'
     */
    const result = await saleService.getById(req.params);

    /*  #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          description: 'ID da venda'
    }
        #swagger.responses[200] = {
          description: 'Encontrado com sucesso!',
          schema: { $ref: '#/definitions/Sale' }
        }
    
        #swagger.responses[404] = {
          description: 'ID da venda não encontrada!'
        }

        #swagger.responses[422] = {
          description: 'O "ID" deve ser um número'
        }
     */
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async add(req, res) {
    const { sales } = await saleService.validateProductSale({ sales: req.body });
    await Promise.all(sales.map(({ productId }) => productService.getById(productId)));
    const result = await saleService.add(sales);
    res.status(status.HTTP_OK_CREATED).json(result);
  },
  async remove(req, res) {
    const { id } = await validate.id(req.params);
    await saleService.getById({ id });
    await saleService.remove({ id });
    res.status(status.HTTP_NO_CONTENT).json();
  },
  async update(req, res) {
    /*  #swagger.tags = ['Sales']
        #swagger.description = 'Rota responsável por atualizar uma venda com base no ID fornecido.'
        #swagger.parameters['id'] = { in: 'path', description: 'ID da venda' }
        #swagger.parameters['newSale'] = {
          in: 'body',
          required: true,
          schema: { $ref: '#definitions/addSale' },
          description: 'Cada venda pode possuir vários produtos diferentes, por isso o corpo fornecido tem forma de lista(array), com todos os produtos da venda.'
        }
     */
    const { id } = await validate.id(req.params);
    const { sales } = await saleService.validateProductSale({ sales: req.body });
    await Promise.all(sales.map(({ productId }) => productService.getById(productId)));
    await saleService.getById({ id });
    const result = await saleService.update({ id, sales });

    /*  #swagger.responses[200] = {
          description: 'Atualizado com sucesso!',
          schema: { $ref: '#definitions/addSale' }
        }

        #swagger.responses[400] = {
          description: 'Corpo ou algum campo inválido para atualização!',
        }

        #swagger.responses[404] = {
          description: 'ID de venda não encontrado!',
        }

        #swagger.responses[422] = {
          description: 'O "ID" deve ser um número',
        }
     */
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
};

module.exports = saleController;