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

### Dialogflow

Para criar o agente, acesse https://dialogflow.cloud.google.com/#/login, e efetue o login usando a conta do Google.<br/>
Depois de logado, clica em <strong>Create new agent</strong>, como mostra na imagem abaixo:

![Create_agent](https://github.com/Wesley45/chatbot/blob/master/screenshots/dialogflow.png)

Crie o novo ao seu agente, e coloque o <strong>DEFAULT LANGUAGE</strong> como Portuguese (Brazilian) - pt-br, como mostra na imagem abaixo:

![Name_agent](https://github.com/Wesley45/chatbot/blob/master/screenshots/dialogflow2.png)

Depois de ter criado seu agente, Clique no botão de configurações, como mostra na imagem abaixo:

![Settings_agent](https://github.com/Wesley45/chatbot/blob/master/screenshots/dialogflow3.png)

Clique em <strong>Export and Import</strong>

![Export_agent](https://github.com/Wesley45/chatbot/blob/master/screenshots/dialogflow4.png)

Clique em <strong>Import from zip</strong>, selecione o arquivo zip que está no projeto, e adicione no seu agente.
   
![Import_agent](https://github.com/Wesley45/chatbot/blob/master/screenshots/dialogflow5.png)

Depois de ter finalizado, o importe do zip, Clique no botão de configurações novamente, e clique no <strong>Service Account</strong>,
como mostra na imagem abaixo:

![Service_agent](https://github.com/Wesley45/chatbot/blob/master/screenshots/dialogflow6.png)

Vai abrir uma guia nova do navegador, e depois clique no <strong>Email</strong>, como mostra na imagem abaixo:

![Email_agent](https://github.com/Wesley45/chatbot/blob/master/screenshots/dialogflow7.png)

Vai em <strong>Chaves</strong>, clica em ADICIONAR CHAVE, e depois em CRIAR NOVA CHAVE, como mostra na imagem abaixo:

![Chave_agent](https://github.com/Wesley45/chatbot/blob/master/screenshots/dialogflow8.png)

Crie a chave privada no formato JSON, e depois adicionar o arquivo json na pasta raiz do projeto, vai no arquivo src/dialogflow.js,
adicione o nome do arquivo json no <strong>const configs = require("./../chatbox-carrefour-aort-f7c880046e24.json")</strong>, que está na linha 2.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dotenv]: <https://www.npmjs.com/package/dotenv>
   [Dialogflow API: Node.js Client]: <https://www.npmjs.com/package/dialogflow>
   [node.js]: <http://nodejs.org>
   [JSON Server]: <https://www.npmjs.com/package/json-server/>
   [Node.js Telegram Bot API]: <https://www.npmjs.com/package/node-telegram-bot-api>
   [axios]: <https://www.npmjs.com/package/axios>
