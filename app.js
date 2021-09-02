const { Client, Collection } = require("discord.js");
const fs = require("fs");
const config = require("./src/config");
var bot = config.bot
const client = new Client({ partials: ["USER", "MESSAGE", "CHANNEL", "REACTION"], ws: {
    properties: {
        $browser: "Discord iOS"
    }
} })

const disbut = require('discord-buttons');
disbut(client)

client.comandos = new Collection();
client.aliases = new Collection();
client.channels2 = new Collection();
for(let i =0; i < config.ticket.channels.length; i++) {
    client.channels2.set(config.ticket.channels[i].id,config.ticket.channels[i].channel)
}
client.categories = fs.readdirSync("./src/comandos/");

["aliases", "comandos"].forEach(x => client[x] = new Collection());
["comando", "eventos"].forEach(x => require(`./src/handlers/${x}`)(client)); 


client.login(bot.token);
