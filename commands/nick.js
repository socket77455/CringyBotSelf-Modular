/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    let nickname = args.join(" ");
    message.delete();
    if (!message.guild.member(client.user).hasPermission('CHANGE_NICKNAME')) {
        message.channel.send('', {
            embed: {
                author: {
                  name: client.user.username
                },
                color: 0x008AF3,
                title: 'No permissions',
                description: 'I don\'t have the required permissionsto change my nickname.',
                timestamp: new Date(),
                footer: {
                  text: 'CringyBot Selfbot edition',
                  icon_url: client.user.avatarURL
                }
            }
        });
    } else {
        message.guild.member(client.user).setNickname(nickname);
        message.channel.send('', {
            embed: {
                author: {
                name: client.user.username
                },
                color: 0x008AF3,
                title: 'Nickname changed successfully!',
                description: `Nickname changed to **${nickname}**!`,
                timestamp: new Date(),
                footer: {
                    text: 'CringyBot Selfbot edition',
                    icon_url: client.user.avatarURL
                }
            }
        });
    }
};
