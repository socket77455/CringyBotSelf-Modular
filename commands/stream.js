/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    let stream = args.join(" ");
    client.user.setGame(stream, 'http://twitch.tv/cringyadam');
    message.delete();
    message.channel.send('', {
        embed : {
            author: {
                name: client.user.username
            },
            title: 'Streaming status successfully changed!',
            color: 0x008AF3,
            description: `Streaming info changed to **${stream}**!`,
            timestamp: new Date(),
            footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
            }
        }
    });
};
