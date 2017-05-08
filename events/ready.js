/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client) => {
    console.log(`------------------------`);
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`------------------------`);
    console.log(`Cringy logs:`);
    afk = false;
    client.user.setGame("ecks dee");
};
