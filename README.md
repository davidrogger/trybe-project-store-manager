# Sobre o Projeto 

Desenvolvido um CRUD de uma API utilizando arquitetura **MSC** (Model Service Controller), de uma loja de super heroes.

<a href="./img/swagger_allroutes.png">
  <img src="./img/swagger_allroutes.png" width="30%"></img>
</a>
<a href="./img/swagger_getProductId.png">
  <img src="./img/swagger_getProductId.png" width="30%"></img>
</a>
<a href="./img/swagger_getProductName.png">
  <img src="./img/swagger_getProductName.png" width="30%"></img>
</a>

# Tecnologias e ferramentas usadas 🛠

![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A)
![Mocha](https://img.shields.io/badge/-Mocha-896446?style=flat-square&logo=mocha&logoColor=ffffff)
![Chai](https://img.shields.io/badge/-Chai-a40802?style=flat-square&logo=chai)
![Sinon](https://img.shields.io/badge/-Sinon-a0d3a4?style=flat-square&logo=sinon)
![Express](https://img.shields.io/badge/-Express-339999?style=flat-square&logo=express)
![Joi](https://img.shields.io/badge/-Joi-0080ff?style=flat-square&logo=joi)
![MySQL](https://img.shields.io/badge/-MySQL-EAA221?style=flat-square&logo=mysql&logoColor=1e4c68)
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=000)

# Desafios

- Boa parte do projeto foi desenolvida usando o metodo **TDD** (Test Driven Development), uma outra parte para entender melhor o que era retornado e entender o que deveria ser aplicado no teste unitário fiz sem TDD aplicando o teste na sequência.

- Organizar toda aplicação, cada arquivo responsável por uma determinada parte. **Route** centralizando todas as rotas de um determinado caminho para lidar somente com aquela roda em especifico. **Controller** lidando com requisições e chamando **Serviços** responsaveis por lidar com validações e chamadas de busca no banco por meio dos **models**.

- Entender a documentação da biblioteca do **Joi**, para ter mais eficiência e agilidade nas validações do corpo necessário para o melhor funcionamento das requisições.

# Conclusão

Maior desafio foi de como definir os testes iniciais, como escrever de forma clara (usando o inglês para treino do idioma), organizar as funcionalidades em camadas da API usando o conceito de **MSC**, encontrar funcionalidades que facilitariam as validações usando o **joi**, e também entender o que os requisitos dos testes solicitados pela trybe do projeto esperavam no desenvolvimento.
Quero melhorar algumas partes do projeto na parte de teste, e a parte de documentação do swagger, essa foi a minha primeira vez usando ele, para coletar algumas imagens e aprensentar alguns endpoints.

# Iniciando o Projeto Store Manager.

Importante: seguir a ordem apresentada a baixo, para o funcionamento.

<details>
  <summary>
    <strong>
      ⚠️ Configurações mínimas para execução do projeto
    </strong>
  </summary>

   - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2
 - API Client ([Thunder Client](https://www.thunderclient.com/), [Insomnia](https://insomnia.rest/), [POSTMAN](https://www.postman.com/), ou algum outro de sua preferência)

</details>

<details>
  <summary>
    <strong>
      ⚙️ Variáveis de ambiente
    </strong>
  </summary>

Deve-se criar um arquivo .env na raiz do projeto com o seguinte conteúdo:
```
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=StoreManager
PORT=3000
```
</details>

<details>
  <summary>
    <strong>
      ⚠️ Inicie o docker-compose
    </strong>
  </summary>

Para iniciar o docker compose, você deve dentro da pasta raiz do projeto usar o comando: `docker-compose up -d`

Verifique se os container está funcionando e rodando com o comando `docker ps`. Devem aparecer dois container com o nome de *store_manager* e *store_manager_db*.

</details>

<details>
  <summary>
    <strong>
      🗂 Acessando as Rotas
    </strong>
  </summary>

As rodas desenvolvidas no projeto são;

# /products
### GET - `localhost:3000/products/search`
- Rota responsável por realizar uma consultas por qualquer palavra inclusa em um nome de produto, usando o sinal de `?q=NomeDesejado` após search.

<details>
  <summary>
    Exemplo:
  </summary>

  ⚠️ Pode ser usado o URL em seu navegador, um API Client ou acessando a rota `localhost:3000/docs` em seu navegador.

  <a href="./img/swagger_searchProductName.png">
    <img src="./img/swagger_searchProductName.png" width="30%"></img>
  </a>

</details>

#
### GET - `localhost:3000/products/:id`
- Rota responsável por realizar uma consulta por um produto especifico com base em seu *id*.
<details>
  <summary>
    Exemplo:
  </summary>

  ⚠️ Pode ser usado o URL em seu navegador, um API Client ou acessando a rota `localhost:3000/docs` em seu navegador.

  <a href="./img/swagger_getProductId.png">
    <img src="./img/swagger_getProductId.png" width="30%"></img>
  </a>

</details>

#
### PUT - `localhost:3000/products/:id`
- Rota responsável por realizar atualização de um produto especifico com base em seu *id*.
<details>
  <summary>
    Exemplo:
  </summary>

  ⚠️ Necessário uso de um API Client ou acessando a rota `localhost:3000/docs` em seu navegador.

<a href="./img/swagger_getProductUpdate.png">
  <img src="./img/swagger_getProductUpdate.png" width="30%"></img>
</a>

</details>


#
### DELETE - `localhost:3000/products/:id`
- Rota responsável por deletar um produto especifico com base em seu *id*.
<details>
  <summary>
    Exemplo:
  </summary>
  ⚠️ Necessário uso de um API Client.

  ```
  localhost:3000/products/1
  ```

- Se realizado com sucesso seu retorno deve ser <strong style="color:green">status 204 No Content</strong>, sem nenhuma informação.
- Caso seja um id que não existe, seu retorno será <strong style="color:red">status 404 Not Found</strong>.

</details>

#
### GET - `localhost:3000/products`
- Rota responsável por apresentar todos os produtos cadastrados no banco de dados.
<details>
  <summary>
    Exemplo:
  </summary>
  ⚠️ Pode ser usado o URL em seu navegador ou um API Client.

  ```
  localhost:3000/products
  ```

- Se realizado com sucesso seu retorno deve ser <strong style="color:green">status 200</strong>, com todos itens cadastrados no banco.

</details>

#
### POST - `localhost:3000/products`
- Rota responsável por cadastrar um novo produto ao banco de dados.
<details>
  <summary>
    Exemplo:
  </summary>
  ⚠️ Necessário uso de um API Client.

  ```
  localhost:3000/products
  ```

- Para realizar o cadastro, deve-se enviar um corpo com todos os campos do produto.

  ```
    {
    "name": "Stone Glove"
    }
  ```
  - Se realizado com sucesso seu retorno deve ser <strong style="color:green">status 204 OK</strong> com o produto cadastrado e seu id.
  - Caso o campo seja inválido ou falte, ele deve retornar <strong style="color:red">status 400 Bad Request</strong> com o campo necessário.
  - Caso seja um id que não existe, seu retorno será <strong style="color:red">status 404 Not Found</strong>.

</details>

#
# /sales
### GET - `localhost:3000/sales/:id`
- Rota responsável por realizar uma consulta por uma venda especifica com base em seu *id*.
<details>
  <summary>
    Exemplo:
  </summary>
  ⚠️ Pode ser usado o URL em seu navegador ou um API Client.

  ```
  localhost:3000/sales/1
  ```
- Seu retorno será <strong style="color:green">status 200</strong> com a venda, caso a venda não exista no banco, seu retorno será <strong style="color:red">status 404 Not Found</strong>.

</details>

#
### PUT - `localhost:3000/sales/:id`
- Rota responsável por realizar atualização de uma venda especifica com base em seu *id*.
<details>
  <summary>
    Exemplo:
  </summary>
  ⚠️ Necessário uso de um API Client.

  ```
  localhost:3000/sales/1
  ```
- Para realizar a atualização, deve-se enviar um corpo com todos os campos da venda, e realizar a atualização dentro do campo desejado. <br />
<strong>Campos necessários abaixo: </strong> <br />
⚠️Nota: É possivel o cadastro de vários produtos à mesma venda, por isso o corpo deve ser em forma de array.

```
[
  {
    "productId": 2,
    "quantity": 5
  },
  ...
]
```
- Se realizado com sucesso seu retorno deve ser <strong style="color:green">status 200 OK</strong> com a venda atualizada, apresentando o o novo dado com seu id.
- Caso o campo seja inválido ou falte, ele deve retornar <strong style="color:red">status 400 Bad Request</strong> com o campo necessário.
- Caso seja um id que não existe, seu retorno será <strong style="color:red">status 404 Not Found</strong>.

</details>

#
### DELETE - `localhost:3000/sales/:id`
- Rota responsável por deletar uma venda especifica com base em seu *id*.
<details>
  <summary>
    Exemplo:
  </summary>
  ⚠️ Necessário uso de um API Client.

  ```
  localhost:3000/sales/1
  ```

- Se realizado com sucesso seu retorno deve ser <strong style="color:green">status 204 No Content</strong>, sem nenhuma informação.
- Caso seja um id que não existe, seu retorno será <strong style="color:red">status 404 Not Found</strong>.

</details>

#
### GET - `localhost:3000/sales`
- Rota responsável por apresentar todas as vendas cadastrados no banco de dados.
<details>
  <summary>
    Exemplo:
  </summary>
  ⚠️ Pode ser usado o URL em seu navegador ou um API Client.

  ```
  localhost:3000/sales
  ```

- Se realizado com sucesso seu retorno deve ser <strong style="color:green">status 200</strong>, com todas vendas cadastradas no banco.

</details>

#
### POST - `localhost:3000/sales`
- Rota responsável por cadastrar uma nova venda ao banco de dados.
<details>
  <summary>
    Exemplo:
  </summary>
  ⚠️ Necessário uso de um API Client.

  ```
  localhost:3000/sales
  ```

- Para realizar o cadastro, deve-se enviar um corpo com todos os campos do produto.
<strong>Campos necessários abaixo: </strong> <br />
⚠️Nota: É possivel o cadastro de vários produtos à mesma venda, por isso o corpo deve ser em forma de array.

  ```
  [
    {
      "productId": 2,
      "quantity": 5
    },
    ...
  ]
  ```
  - Se realizado com sucesso seu retorno deve ser <strong style="color:green">status 204 OK</strong> com a venda cadastrada e seu id.
  - Caso o campo seja inválido ou falte, ele deve retornar <strong style="color:red">status 400 Bad Request</strong> com o campo necessário.
  - Caso seja um id que não existe, seu retorno será <strong style="color:red">status 404 Not Found</strong>.

</details>

#

# 🚧 /doc

### `localhost:3000/doc`
- Rota de documentação usando o swagger, em desenvolvimento.

</details>

