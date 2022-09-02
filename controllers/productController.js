const productService = require('../services/productService');
const status = require('../helpers/status');

const productController = {
  async getAll(_req, res) {
    const result = await productService.getAll();
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async getById(req, res) {
    const { id } = await productService.validateId(req.params);
    const result = await productService.getById(id);
    res.status(status.HTTP_OK_REQUEST).json(result);
  },
  async add(req, res) {
    const product = await productService.validateProductBody(req.body);
    const result = await productService.add(product);
    res.status(status.HTTP_OK_CREATED).json(result);
  },
  async update(req, res) {
    const [{ id }, { name }] = await Promise.all([
      productService.validateId(req.params),
      productService.validateProductBody(req.body),
    ]);
    
    await productService.getById(id);
    await productService.update({ id, name });

    res.status(status.HTTP_OK_REQUEST).json({ id, name });
  },
  async remove(req, res) {
    const { id } = await productService.validateId(req.params);
    await productService.getById(id);
    await productService.remove({ id });
    res.status(status.HTTP_NO_CONTENT).json();
  },
  async getByName(req, res) {
    /*  #swagger.tags = ['Products']
        #swagger.description = 'Rota responsavel por procurar um produto por alguma palavra
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