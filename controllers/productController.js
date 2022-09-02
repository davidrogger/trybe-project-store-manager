const productService = require('../services/productService');
const status = require('../helpers/status');

const productController = {
  async getAll(_req, res) {
    /*  #swagger.tags = ['Products']
        #swagger.description = 'Rota responsável por mostrar todos os produtos cadastrados.'
     */
    const result = await productService.getAll();

    // #swagger.responses[200] = { description: 'Busca realizada com sucesso!' }
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async getById(req, res) {
    /*  #swagger.tags = ['Products']
        #swagger.description = 'Rota responsável por procurar um produto com base no ID fornecido.'
        #swagger.parameters['id'] = {
          in: 'path',
          description: 'ID do produto',
          required: true,
        }
     */
    const { id } = await productService.validateId(req.params);
    const result = await productService.getById(id);
    /*  #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Product" },
      description: 'Produto encontrado!'
    }
        #swagger.responses[404] = {
          description: 'Produto não encontrado!'
        }

        #swagger.responses[422] = {
          description: 'O "ID" deve ser um número'
        }
    */
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async add(req, res) {
    const product = await productService.validateProductBody(req.body);
    const result = await productService.add(product);
    res.status(status.HTTP_OK_CREATED).json(result);
  },
  async update(req, res) {
    /** #swagger.tags = ['Products']
        #swagger.description = 'Rota responsável por atualizar informações de um produto com base no ID fornecido.'
        #swagger.parameters['id'] = { in: 'path', description: 'ID do produto' }
        #swagger.parameters['update'] = {
          in: 'body',
          description: 'Dados para atualização do produto',
          schema: { $ref: "#definitions/addProduct" },
          required: true
      }
    */
    const [{ id }, { name }] = await Promise.all([
      productService.validateId(req.params),
      productService.validateProductBody(req.body),
    ]);
    
    await productService.getById(id);
    await productService.update({ id, name });
    /** #swagger.responses[200] = {
          description: 'Atualizado com sucesso!',
          schema: { $ref: "#definitions/newProduct" }
        }
    
        #swagger.responses[400] = {
          description: 'Corpo inválido!',
        }
    
        #swagger.responses[404] = {
          description: 'ID do produto não encontrado!'
        }

        #swagger.responses[422] = {
          description: 'O "ID" deve ser um número'
        }
    
     */
    res.status(status.HTTP_OK_REQUEST).json({ id, name });
  },
  async remove(req, res) {
    /*  #swagger.tags = ['Products']
        #swagger.description = 'Rota responsável por remover um produto com base no ID fornecido.'
        #swagger.parameters['id'] = { in: 'path', description: 'ID do produto' }
     */
    const { id } = await productService.validateId(req.params);
    await productService.getById(id);
    await productService.remove({ id });

    /*  #swagger.responses[204] = {
          description: 'Produto removido com sucesso'
        }

        #swagger.responses[404] = {
          description: 'ID do produto não encontrado!'
        }

        #swagger.responses[422] = {
          description: 'O "ID" deve ser um número'
        }
     */
    res.status(status.HTTP_NO_CONTENT).json();
  },
  async getByName(req, res) {
    /*  #swagger.tags = ['Products']
        #swagger.description = 'Rota responsável por procurar um produto por alguma palavra
          ou letra em seu nome.' */

    const result = await productService.getByName(req.query);

    /*  #swagger.parameters['q'] = {
      in: 'query',
      description: '<p>Insira a palavra ou letra do nome do produto que deseja procurar.</p>
      <ul>
        <li>Caso omitido retorna todos produtos.</li>
        <li>Caso Não encontre um produto correspondente a palavra procurada retorna uma lista vazia.</li>
      </ul>
      ',
    }
      */

    /* #swagger.responses[200] = {
      description: "Busca realizada com sucesso!"
      }
      */
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
};

module.exports = productController;