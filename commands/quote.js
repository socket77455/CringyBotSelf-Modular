/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    message.channel.fetchMessage(args.join(' '))
    .then(message => {
    message.channel.send('', {
        embed: {
            title: 'Message quote:',
            description: `${message.content}`,
            color: 0x008AF3,
            footer: {
                text: `By ${message.author.tag}`,
                icon_url: message.author.avatarURL
            }
        }
    });
  }).catch(console.error)
};
