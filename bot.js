, const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    client.user.setUsername('RavenBot');
    console.log('The Raven has arrived.');
});

client.on("guildCreate", guild => {
    console.log(`I joined a new server: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on('message', async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "help") {
        message.reply('The Raven will respond when you say  :raven ask <question>, :raven advice ')
    }
});
    if(command === "ask") {
     message.reply "The raven is thinking... And the answer is... No."
    }
client.login(process.argv[2])
