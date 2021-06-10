const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

//TODO:Agregar comandos para ver la playlist, quitar canciones
//Array de prefijos para pedir una cancion
let songCall = ["_p", "_P", "!p", "!P", "/p", "/P"];
let songList = [];
//Puesta en marcha del bot
client.on("ready", () => {
  console.log("Bot Ensamblado");
  client.user.setActivity("Saving your activity");
});

//Saludo
//FIXME: solo saluda cuando alguien manda un mensaje
if (client.presence.status == "online") {
  client.once("message", (message) => {
    message.channel.send(
      `Music Bot Ready to Save Song's Set :fist: :sweat_drops:`
    );
  });
}

//Checkea que el mensaje empiece con la llamada a la cancion
for (let i of songCall) {
  client.on("message", (message) => {
    if (!message.content.startsWith(`${i}`)) {
      return;
    } else if (message.content.startsWith(`${i}`)) {
      //Trimea la parte inicial de la solicitud de cancion y espacios de principio y fin
      const songName = message.content.slice(i.length).trim();
      message.channel.send(`Se agrego: ${songName} a la Playlist`);
      songList.push(songName);
    }
  });
}
//Muestra Lista de Canciones en la Playlist
client.on("message", (message) => {
  if (!message.content === `${prefix}songs`) {
    return;
  } else if (message.content === `${prefix}songs`) {
    message.channel.send(">>> `Playlist`");
    for (let u of songList) {
      message.channel.send("`" + `${u}\n` + "`");
    }
  }
});
//Coneccion a sv
client.login(token);
