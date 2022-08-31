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
- Rota responsavel por realizar uma consultas por qualquer palavra inclusa em um nome de item, usando o sinal de `?q=NomeDesejado` após search.

<details>
  <summary>
    Exemplo:
  </summary>

  ```
  localhost:3000/products/search?q=thor
  ```
  Seu retorno será qualquer item que tenha em seu nome `thor`.

</details>

#
### GET - `localhost:3000/products/:id`
- Rota responsavel por realizar uma consulta por um item especifico com base em seu *id*.
<details>
  <summary>
    Exemplo:
  </summary>

  ```
  localhost:3000/products/1
  ```
  Seu retorno será do item com id 1, caso o item não exista no banco, seu retorno será `Product not found`.

</details>

#
### PUT - `localhost:3000/products/:id`
#
### DELETE - `localhost:3000/products/:id`
#
### GET - `localhost:3000/products`
#
### POST - `localhost:3000/products`
- Rota responsavel por apresentar todos os itens cadastrados no banco de dados.
#
# /sales

### GET - `localhost:3000/sales/:id`
#
### PUT - `localhost:3000/sales/:id`
#
### DELETE - `localhost:3000/sales/:id`
#
### GET - `localhost:3000/sales`
#
### POST - `localhost:3000/sales`
#

# 🚧 /doc

### `localhost:3000/doc`
- Rota de documentação usando o swagger, em desenvolvimento.

</details>

