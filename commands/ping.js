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
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            color: 0x008AF3,
            title: "Pong",
            description: `${client.ping} MS.`
        }
    });
};