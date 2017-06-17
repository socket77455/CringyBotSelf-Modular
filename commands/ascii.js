/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

const asciify = require('asciify');
exports.run = (client, message, args) => {
    let textasciify = args.join(" ")
    if (!textasciify) return message.edit("Turning no text into ascii would be pointless")
    asciify(textasciify, function (err, res) {
      if (err) {
        console.error(err)
        message.channel.send(`There was an error when trying to convert text. Error: \`\`\`${err}\`\`\``)
        return
      }
    
      message.edit("```\n" + res + "```\n");
    }
};
