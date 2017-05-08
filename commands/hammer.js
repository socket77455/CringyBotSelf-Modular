/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    message.delete();
    message.channel.send('', {
        embed: {
            color: 0x008AF3,
            image: {
                url: 'http://i.imgur.com/O3DHIA5.gif',
            },
            timestamp: new Date(),
            footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
            }
        }
    });
};