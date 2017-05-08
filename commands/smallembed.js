/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    message.delete();
    let input = args.join(" ");
    message.channel.send('', {
        embed: {
            color: 0x008AF3,
            description: '' + input,
        }
    });
};
