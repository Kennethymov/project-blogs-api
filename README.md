# Projeto Blogs API

Consiste em uma API de banco de dados para produção de conteúdo para um blog. 

* Construída com Node.js, Express, Sequelize com MySQL e Docker
* Utilizando as práticas do REST
* Aplicada Arquitetura de Software, com as camadas de Modelo, de Serviço e de Controladores


### Instruções

- Para rodar o repositório localmente, realize o clone do projeto e utilize os comandos a seguir para inicializar o Docker, instalar as dependências e configurar o banco de dados:

```
npm run prestart // para criar o banco de dados e as migrações
npm run seed // para popular o banco de dados
docker-compose up -d --build
docker attach store_manager
npm install // para instalar as dependências
docker-compose down // para parar completamente a aplicação
```

E utilize os comandos a seguir para executar a aplicação:

```
npm start // para iniciar a aplicação
ou
npm run debug // para iniciar a aplicação em ambiente de desevilvimento
```

### Endpoints

#### Login

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza login do usuário e retorna o token | http://localhost:3000/login |

Nessa requisição é necessário informar o seguinte JSON:

```
{
  "email": "email-cadastrado-no-banco-de-dados@email.com",
  "password": "123456"
}
```

#### Usuário

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Criar um novo usuário e retorna o token | http://localhost:3000/user |
| `GET` | Retorna os dados não sensíveis de todos os usuário | http://localhost:3000/user |
| `GET` | Retorna os dados não sensíveis de um usuário específico | http://localhost:3000/user/:id |


Na requisição POST, é necessário informar a os dados o usuário no formato a seguir:

```
{
  "displayName": "Usuário Exemplo",
  "email": "usuario-exemplo@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```

#### Categorias

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Adiciona uma nova categoria | http://localhost:3000/categories |
| `GET` | Retorna todas as categorias cadastradas | http://localhost:3000/categories |

Na requisição POST, é necessário informar a o nome da categoria no formato a seguir:

```
{
  "name": "Typescript"
}
```


#### Post

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Adiciona um novo post e realiza o vínculo com a tabela de categorias | http://localhost:3000/post |
| `GET` | Retorna todos os post contendo o usuário criador e as categorias | http://localhost:3000/post |
| `GET` | Retorna um post específico contendo o usuário criador e as categorias | http://localhost:3000/post/:id |
| `PUT` | Altera o título e o conteúdo de um post específico | http://localhost:3000/post/:id |

Na requisição POST, é necessário informar a os dados do post no formato a seguir:

```
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```

Na requisição PUT, os dados a serem atualizados devem estar no seguinte formato:

```
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```
