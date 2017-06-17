/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

const google = require('google');
exports.run = (client, message, args) => {
    let input = args.join(" ");
    google.resultsPerPage = 1
    var nextCounter = 0
    google(input, function (err, res){
        if (err) console.error(err);
        for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        message.delete();
            message.channel.send('', {
            embed: {
                author: {
                    name: client.user.username,
                    icon_url: "http://i.imgur.com/EdV2r11.png"
                },
                title: `${link.title}`,
                url: `${link.href}`,
                color: 0x008AF3,
                description: `${link.description}\n**Click [here](${link.href}) to go to the link.**`,
                timestamp: new Date(),
                footer: {
                    text: 'CringyBot Selfbot edition',
                    icon_url: client.user.avatarURL
                }
            }
        })
    }
    })
};
