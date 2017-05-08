/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    if(afk == true) {
    afk = false;
    message.delete();
    message.channel.send('', {
        embed: {
            color: 0x4CAF50,
            description: 'I am no longer AFK!'
        }
    })
    client.user.setGame("ecks dee");
    } else if(afk == false) {
        afk = true;
        message.delete();
        message.channel.send('', {
            embed: {
                color: 0xC62828,
                description: 'I am now AFK! Sorry...'
            }
        })
        client.user.setGame("AFK | DM or mention me if you need something");
    }
};
