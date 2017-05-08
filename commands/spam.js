/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    const timesToSend = parseInt(message.content.split(' ')[1]);
    let text = message.content.split(/[ ]+/).slice(2).join(' ');
    for (i = 1; i <= timesToSend; i++) {
        message.channel.send(text);
    }
};
