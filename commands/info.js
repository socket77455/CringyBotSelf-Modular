/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    message.delete();
    message.channel.send('', {
        embed: {
            author: {
                name: client.user.username
            },
            color: 0x008AF3,
            title: "CringyBot Selfbot edition info:",
            description: 'This selfbot is made by Adam Aharony (a.k.a. Cringy Adam).\n(Twitter: @AdamAharony)\nAiming to make the discord experience much better.',
            timestamp: new Date(),
            footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
            }
        }
    });
};