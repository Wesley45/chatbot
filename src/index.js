require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

const dialogflow = require("./dialogflow");

const bot = new TelegramBot(process.env.ACCESS_TOKEN, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

  let responseText = dfResponse.text;

  bot.sendMessage(chatId, responseText);

  console.log(dfResponse);

  let voltar = false;

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 1-mercardo - 1-alimentos_basicos - 1 - arroz" ||
    dfResponse.intent ==
      "voltar-menu - 1 - mercardo - 1 - alimentos_basicos - 1 - arroz"
  ) {
    responseText = await requestEcommerce(
      "mercado",
      "option=alimentos_basicos&category=arroz_graos"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 1-mercardo - 1-alimentos_basicos - 2 - azeites" ||
    dfResponse.intent ==
      "voltar-menu - 1 - mercardo - 1 - alimentos_basicos - 2 - azeites"
  ) {
    responseText = await requestEcommerce(
      "mercado",
      "option=alimentos_basicos&category=especiarias"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 1-mercardo - 1-alimentos_basicos - 3 - conservas" ||
    dfResponse.intent ==
      "voltar-menu - 1 - mercardo - 1 - alimentos_basicos - 3 - conservas"
  ) {
    responseText = await requestEcommerce(
      "mercado",
      "option=alimentos_basicos&category=conservas"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 1-mercardo - 1-alimentos_basicos - 4 - massas" ||
    dfResponse.intent ==
      "voltar-menu - 1 - mercardo - 1 - alimentos_basicos - 4 - massas"
  ) {
    responseText = await requestEcommerce(
      "mercado",
      "option=alimentos_basicos&category=massas"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 1-mercardo - 2 - bebidas - 1 - agua" ||
    dfResponse.intent == "voltar-menu - 1 - mercardo - 2 - bebidas - 1 - agua"
  ) {
    responseText = await requestEcommerce(
      "mercado",
      "option=bebidas&category=agua"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 1-mercardo - 2 - bebidas - 2 - cerveja" ||
    dfResponse.intent ==
      "voltar-menu - 1 - mercardo - 2 - bebidas - 2 - cerveja"
  ) {
    responseText = await requestEcommerce(
      "mercado",
      "option=bebidas&category=cervejas"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 1-mercardo - 2 - bebidas - 3 -sucos" ||
    dfResponse.intent == "voltar-menu - 1 - mercardo - 2 - bebidas - 3 - sucos"
  ) {
    responseText = await requestEcommerce(
      "mercado",
      "option=bebidas&category=sucos"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 1-mercardo - 3 - frescos - 1 - carnes" ||
    dfResponse.intent == "voltar-menu - 1 - mercardo - 3 - frescos - 1 - carnes"
  ) {
    responseText = await requestEcommerce(
      "mercado",
      "option=frescos&category=carnes"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 2-celulares - 1-marca - 1 - samsung" ||
    dfResponse.intent == "voltar-menu - 2 - celulares - 1 - marca - 1 - samsung"
  ) {
    responseText = await requestEcommerce(
      "celulares",
      "option=marca&category=samsung"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 2-celulares - 1-marca - 2 - motorola" ||
    dfResponse.intent ==
      "voltar-menu - 2 - celulares - 1 - marca - 2 - motorola"
  ) {
    responseText = await requestEcommerce(
      "celulares",
      "option=marca&category=motorola"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 2-celulares - 2 - memoria - 1 - memoria128" ||
    dfResponse.intent ==
      "voltar-menu - 2 - celulares - 2 - memoria - 1 - memoria128"
  ) {
    responseText = await requestEcommerce(
      "celulares",
      "option=memoria&category=128GB"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 2-celulares - 2 - memoria - 2 - memoria64GB" ||
    dfResponse.intent ==
      "voltar-menu - 2 - celulares - 2 - memoria - 2 - memoria64GB"
  ) {
    responseText = await requestEcommerce(
      "celulares",
      "option=memoria&category=64GB"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 2-celulares - 2 - memoria - 3 - memoria32GB" ||
    dfResponse.intent ==
      "voltar-menu - 2 - celulares - 2 - memoria - 3 - memoria32GB"
  ) {
    responseText = await requestEcommerce(
      "celulares",
      "option=memoria&category=32GB"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 2-celulares - 3-linha - 1 - galaxy" ||
    dfResponse.intent == "voltar-menu - 2 - celulares - 3 - linha - 1 - galaxy"
  ) {
    responseText = await requestEcommerce(
      "celulares",
      "option=marca&category=samsung"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 2-celulares - 3-linha - 2 - one" ||
    dfResponse.intent == "voltar-menu - 2 - celulares - 3 - linha - 2 - one"
  ) {
    responseText = await requestEcommerce(
      "celulares",
      "option=marca&category=motorola&id=5&id=6"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 2-celulares - 3-linha - 3 - moto" ||
    dfResponse.intent == "voltar-menu - 2 - celulares - 3 - linha - 3 - moto"
  ) {
    responseText = await requestEcommerce(
      "celulares",
      "option=marca&category=motorola&id=4"
    );

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 3-tvs - 1 - tvs_ofertas" ||
    dfResponse.intent == "voltar-menu - 3 - tvs - 1 - tvs_ofertas"
  ) {
    responseText = await requestEcommerce("tvs", "category=tvs_oferta");

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (
    dfResponse.intent ==
      "Default Welcome Intent - yes - 3-tvs - 2 - melhor_preço" ||
    dfResponse.intent == "voltar-menu - 3 - tvs - 2 - melhor_preço"
  ) {
    responseText = await requestEcommerce("tvs", "category=melhor_preco");

    voltar = true;

    bot.sendMessage(chatId, responseText.join("\n"));
  }

  if (voltar) {
    bot.sendMessage(
      chatId,
      "Se você desejar voltar ao MENU inicial, digite VOLTAR. Ou se deseja terminar digite CANCELAR"
    );
  }
});

async function requestEcommerce(param, query) {
  const response = await axios.get(`http://localhost:3000/${param}?${query}`);

  let responseText = response.data.map((d) => {
    return `${d.name}\nValor: ${d.price}\nAcesse: ${d.url}\n\n`;
  });

  return responseText;
}
