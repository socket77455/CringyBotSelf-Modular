/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

const config = require('../config.json');
exports.run = (client, message, args) => {
    message.delete();
    message.channel.send('', {
        embed: {
            author: {
                name: client.user.username
            },
            color: 0x008AF3,
            title: "CringyBot Selfbot edition Help",
            description: `
            **${config.prefix}info** - shows info about the bot.
            **${config.prefix}github** - sends link to github.
            **${config.prefix}help** - displays this message.
            **${config.prefix}google** - searches Google.
            **${config.prefix}spam** <number>  - spams a message. **USE WITH CAUTION!**
            **${config.prefix}nick** - changes your nickname on this server.
            **${config.prefix}game** - changes the game you're playing.
            **${config.prefix}stream** - changes the streaming status.
            **${config.prefix}embed** - puts messages in an embed with your user name and profile pic.
            **${config.prefix}smallembed** - embeds stuff in a smaller form.
            **${config.prefix}status** - displays info about you.
	   **${config.prefix}purge** <number> - purges a number of your messages.
            **${config.prefix}eval** - evaluates and executes JS code that's it.
            **${config.prefix}hammer** - sends the discord ban hammer gif.
            **${config.prefix}lewis** - shows a really good pic of ya boi Lew.
            **${config.prefix}rickroll** - sends a link to the song.
            **${config.prefix}ping** - really? do you need a description for that?
            **${config.prefix}shutdown** - shuts the selfbot down.
            **${config.prefix}reload** <command> - reloads a command.
            **${config.prefix}time** - shows the server's time.`,
            timestamp: new Date(),
            footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
            }
        }
    });
};
