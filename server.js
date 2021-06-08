const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Listo para guardar canciones");
});

client.on("message", (message) => {
  if (message.content.startsWith("```So```")) {
    message.channel.send("```Barme la pija```");
  }
  if (message.content.startsWith("@1v1")) {
    message.channel.send("```No se hermano 1v1 cuando quieras```");
  }
  if (message.content.startsWith("1v1")) {
    message.channel.send("```No se hermano 1v1 cuando quieras```");
  }
  if (message.content.startsWith("El")) {
    message.channel.send("```BOLAS```");
  }
  if (message.content.startsWith("!play bts")) {
    message.channel.send("```Que pedazo de puto```");
  }
  if (message.content.startsWith("**Playing** :notes: `Bts`")) {
    message.channel.send("```!p skip```");
  }
  if (message.content.startsWith("**Playing** :notes: `BTS`")) {
    message.channel.send("!p skip");
  }
});

client.login("NzA1MzE5NTE5MDY0ODE3NzU3.Xqvx-g.Oe3WBMVqBGJ0HQ-_xHjeDYJeI-4");
