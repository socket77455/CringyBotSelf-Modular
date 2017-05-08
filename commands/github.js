/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    message.delete();
    var link = "https://github.com/CringyAdam/CringyBotSelf-Modular";
    message.channel.send('', {
        embed: {
            author: {
                name: client.user.username
            },
            color: 0x008AF3,
            title: 'Github repository link:',
            description: `Click [here](${link}) to go to the CringyBotSelf-Modular Github repository.`,
            timestamp: new Date,
            footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
            }
        }
    });
};
