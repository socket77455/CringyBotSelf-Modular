/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    let input = args.join(" ");
    message.delete();
    message.channel.send('', {
        embed: {
            color: 0x008AF3,
            author: {
                name: client.user.username
            },
            description: '' + input,
            timestamp: new Date(),
            footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
            }
        }
    });
};
