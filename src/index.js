require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

const dialogflow = require("./dialogflow");

const bot = new TelegramBot(process.env.ACCESS_TOKEN, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

  let responseText = dfResponse.text;

  if (dfResponse.intent == "sim.ecommerce - 1-mercardo - 1-alimentos_basicos") {
    const response = await axios.get(
      "http://localhost:3000/mercado?option=alimentos_basicos&category=arroz_graos"
    );

    responseText = response.data.map((d) => {
      return `${d.name}\nValor: ${d.price}\nAcesse: ${d.url}\n\n`;
    });

    console.log(responseText);

    bot.sendMessage(chatId, responseText.join("\n"));
  } else {
    bot.sendMessage(chatId, responseText);
  }
});
