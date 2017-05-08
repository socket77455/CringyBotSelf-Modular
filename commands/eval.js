/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    try {
        var code = args.join(" ");
        var evaled = eval(code);
        if (typeof evaled !== "string") {
            evaled = require("util").inspect(evaled);
        } else if (code == 'client.token' || code == 'token' || evaled == 'client.token' || evaled == 'token') {
            message.channel.send('', {
                embed: {
                    author: {
                        name: client.user.username
                    },
                    color: 0x88AF3,
                    title: 'Security warning!',
                    description: 'Successfully blocked token leak!',
                    timestamp: new Date(),
                    footer: {
                        text: 'CringyBot Selfbot edition',
                        icon_url: client.user.avatarURL
                    }
                }
            });
            return;
        }
        message.channel.sendCode("xl", evaled);
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        }
};
