/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    message.delete();
    let args = message.content.split(" ").slice(1);
    let game = args.join(" ");
    client.user.setGame(game);
    message.channel.send('', {
        embed : {
            author: {
                name: client.user.username
            },
            title: 'Game successfully changed!',
            color: 0x008AF3,
            description: `Game changed to **${game}**!`,
            timestamp: new Date(),
            footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
            }
        }
    });
};