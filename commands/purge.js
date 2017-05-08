/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
		let messagecount = parseInt(args[0]);
    message.channel.fetchMessages({
        	limit: 100
    })
    .then(messages => {
      let msg_array = messages.array();
      msg_array = msg_array.filter(m => m.author.id === client.user.id);
      msg_array.length = messagecount + 1;
      msg_array.map(m => m.delete().catch(console.error));
    });
		message.channel.send('', {
			embed: {
					author: {
						name: client.user.username
					},
					color: 0x008AF3,
					title: 'Messages deleted successfully!',
					description: `Deleted **${messagecount}** messages successfully`,
					timestamp: new Date,
					footer: {
						text: 'CringyBot Selfbot edition',
						icon_url: client.user.avatarURL
					}
				}
		});
};
