/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
let prefix = config.prefix;
let token = config.token;
var afk
let logchannel = require('./config.json').logchannel;


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});


client.on('message', message => {
    if (message.mentions.users.has(client.user.id)) {
        if (message.author.id === client.user.id) return;
        client.channels.get(logchannel).send('', {
            embed: {
                author: {
                    name: client.user.username
                },
                title: 'We have a mention!',
                color: 0x008AF3,
                fields: [{
                    name: 'From:',
                    value: `${message.author.tag} in ${message.guild.name}`
                },
                {
                    name: 'Message content:',
                    value: `${message.content}`
                }],
                timestamp: new Date(),
                footer: {
                    text: 'CringyBot Selfbot edition',
                    icon_url: client.user.avatarURL
                }
            }
          });
    }
    
    if (message.author.id !== client.user.id) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    let args = message.content.split(" ").slice(1);


    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
        console.log(`${prefix}${command}`);
        client.channels.get(logchannel).send(`**${prefix}${command}**`);
  } catch (err) {
        console.error(err);
        client.channels.get(logchannel).send(`Error with command **${command}**.\n${err}`);
  }
});

client.login(process.env.topstoken);
