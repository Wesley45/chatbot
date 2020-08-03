# Chatbot E-commerce

Essa aplicação foi proposta de um desafio da Digital Innovation One, chamado de Tech Challenge do Carrefour, onde o intuito dessa aplicação, é facilitar a forma de encontrar um produto do e-commerce via Telegram.

### Tech

O Chatbot E-commerce usa vários projetos de código aberto para funcionar corretamente:

* [axios] - Promise based HTTP client for the browser and node.js!
* [Dialogflow API: Node.js Client] - Dialogflow API client for Node.js
* [dotenv] - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
* [JSON Server] - Get a full fake REST API with zero coding in less than 30 seconds
* [node.js] - evented I/O for the backend
* [Node.js Telegram Bot API] - Node.js module to interact with the official Telegram Bot API.

### Instalação

Instale as dependências e inicie o servidor.

```sh
$ cd chatbot
$ npm install
$ npm run start
$ npx json-server db.json
```

Para variáveis de ambiente...
Crie um arquivo .env na raiz do projeto.

```sh
$ ACCESS_TOKEN=access token Telegram API
```

### DialogFlow

Acesse o site https://dialogflow.cloud.google.com/#/login, e efetue o login.
Crie um novo agente.
Depois de ter criado o novo agente, clica em configuração do agente, e vai em Export and Import, e IMPORT FROM ZIP, e selecionado o arquivo zip que está no projeto.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dotenv]: <https://www.npmjs.com/package/dotenv>
   [Dialogflow API: Node.js Client]: <https://www.npmjs.com/package/dialogflow>
   [node.js]: <http://nodejs.org>
   [JSON Server]: <https://www.npmjs.com/package/json-server/>
   [Node.js Telegram Bot API]: <https://www.npmjs.com/package/node-telegram-bot-api>
   [axios]: <https://www.npmjs.com/package/axios>
