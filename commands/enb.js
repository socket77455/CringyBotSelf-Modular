module.exports.run = async (bot, message, args) => {

    const v = require("../../index.js")

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
                    text: 'Powered by: GuGU World',
                    icon_url: client.user.avatarURL
                }
            }
        });
    };
    

module.exports.config = {
    command: "emb"
}
