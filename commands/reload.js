/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

const prefix = require('../config.json');
exports.run = (client, message, args) => {
    if(!args || args.size < 1) return message.channel.send('', {
        embed: {
            author: {
                name: client.user.id
            },
            title: 'No command to reload!',
            color: 0x008AF3,
            description: `Specify a command to reload (**${prefix}reload** <commandtoreload>)`,
            footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
            }
        }
    });
    delete require.cache[require.resolve(`./${args[0]}.js`)];
     message.channel.send('', {
         embed: {
             author: {
                 name: client.user.username
             },
             title: 'Command reloaded!',
             description: `The command **${args[0]}** was reloaded successfully!`,
             color: 0x008AF3,
             footer: {
                 text: 'CringyBot Selfbot edition',
                 icon_url: client.user.avatarURL
             }
         }
     });
};
