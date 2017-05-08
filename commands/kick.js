/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    if (message.mentions.users.size == 0) {
        message.channel.send('', {
            embed: {
                author: {
                    name: client.user.username
                },
                color: 0x88AF3,
                title: 'Syntax error',
                description: 'No user mentioned. can\'t kick.',
                timestamp: new Date(),
                footer: {
                  text: 'CringyBot Selfbot edition',
                  icon_url: client.user.avatarURL
                }
            }
        });
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {
        message.channel.send('', {
            embed: {
                author: {
                  name: client.user.username
                },
                color: 0x88AF3,
                title: 'Invalid user',
                description: 'That user is invalid.',
                timestamp: new Date(),
                footer: {
                  text: 'CringyBot Selfbot edition',
                  icon_url: client.user.avatarURL
                }
            }
        });
    }
    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
        message.channel.send('', {
            embed: {
                author: {
                  name: client.user.username
                },
                color: 0x88AF3,
                title: 'No permissions',
                description: `I don\'t have the required permissions to kick ${kickMember}.`,
                timestamp: new Date(),
                footer: {
                  text: 'CringyBot Selfbot edition',
                  icon_url: client.user.avatarURL
                }
            }
        });
     }
    message.delete();
    kickMember.kick().then(member => {
        message.channel.send('', {
            embed: {
                author: {
                    name: client.user.username
                },
                color: 0x88AF3,
                title: `Successfully kicked ${kickMember}`,
                description: 'Oh, that felt good.',
                timestamp: new Date(),
                footer: {
                    text: 'CringyBot Selfbot edition',
                    icon_url: client.user.avatarURL
                }
            }
        });
    });
};