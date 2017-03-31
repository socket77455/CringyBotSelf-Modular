/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#3754
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require('moment');
const config = require("./config.json")
let prefix = require("./config.json").prefix
let token = require("./config.json").token
require('moment-duration-format')
const package = require("./package.json")
const version = require("./package.json").version


client.on('ready', () => {
    console.log(`------------------------`);
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}!`);
    console.log(`------------------------`);
    console.log(`Cringy logs:`);

});

client.on('message', message => {
    if (message.author.id !== client.user.id) return;

        if (message.content.startsWith(prefix + 'kill')) {
            message.delete();
            process.exit(0)
        }



        if (message.content.startsWith(prefix + 'info')) {
            message.delete();
            message.channel.sendMessage('', {
                embed: {
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL
                    },
                    color: 0x008AF3,
                    title: "Version",
                    description: `${package.version}`
                }
            })
        }

        if (message.content.startsWith(prefix + 'ping')) {
            message.delete();
            message.channel.sendMessage('', {
                embed: {
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL
                    },
                    color: 0x008AF3,
                    title: "Pong",
                    description: `${client.ping} MS.`
                }
            })
        }


        if (message.content.startsWith(prefix + 'google')) {
            let args = message.content.split(" ").slice(1);
            let search = args.join(' ');
            let input = args.join("+");
            let link = "https://www.google.com/search?site=&source=hp&q=" + input;
            message.delete();
            message.channel.sendMessage('', {
              embed: {
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
                },
                color: 0x008AF3,
                title: 'Google search results:',
                description: `Results for **${search}**: Click [here](${link})!`,
                timestamp: new Date(),
                footer: {
                  text: 'CringyBot Selfbot edition'
                }
              }
          })
        }

        if (message.content.startsWith(prefix + 'help')) {
            message.delete();
            message.channel.sendMessage('', {
                embed: {
                  author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                  },
                    color: 0x008AF3,
                    title: "Selfbot Help",
                    description: `**${config.prefix}git** - sends link to github.\n**${config.prefix}help** - Displays this message.\n**${config.prefix}google** - searches Google.\n**${config.prefix}nick** - changes your nickname on this server.\n**${config.prefix}game** - changes the game you're playing.\n**${config.prefix}embed** - puts messages in an embed with your user name and profile pic.\n**${config.prefix}profile** - displays info about you.\n**${config.prefix}eval** - evaluates JS code that's it.\n**${config.prefix}hammer** - sends the discord ban hammer gif.\n**${config.prefix}lewis/levis** - shows a really good pic of ya boi Lew.\n**${config.prefix}rickroll** - sends a link to the song.\n**${config.prefix}ping** - really? do you need a description for that?\n**${config.prefix}kill** - kills the selfbot.\n**${config.prefix}time** - shows the server's time.`,
                timestamp: new Date(),
                footer: {
                    text: 'CringyBot Selfbot edition'
                }
            }
        })
      }




        if (message.content.startsWith(prefix + 'profile')) {
            message.delete();
            message.channel.sendMessage('', {
                embed: {
                  author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                  },
                    color: 0x008AF3,
                    fields: [{
                            name: 'Guilds/Servers',
                            value: `${client.guilds.size}`
                        },
                        {
                            name: 'SelfBot Uptime',
                            value: `${moment.duration(client.uptime).format("D [days], H [hrs], m [mins], s [secs]")}`
                        },
                        {
                            name: 'Ram',
                            value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'CringyBot Selfbot edition'
                    }
                }
            });
        }


        if (message.content.startsWith(prefix + 'nick')) {
          let args = message.content.split(" ").slice(1);
          let nickname = args.join(" ");
          message.delete();
          message.guild.member(client.user).setNickname(nickname);
          message.channel.sendMessage('', {
            embed: {
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              color: 0x008AF3,
              title: 'Nickname changed successfully!',
              description: `Nickname changed to **${nickname}**!`,
              timestamp: new Date(),
              footer: {
                text: 'CringyBot Selfbot edition'
              }
            }
          })
        }


        if (message.content.startsWith(prefix + 'lewis') || message.content.startsWith(prefix + 'levis')) {
          message.delete();
          message.channel.sendMessage('', {
            embed: {
              color: 0x008AF3,
              image: {
                url: 'http://i.adampro.cu.cc/levis.png',
              },
              timestamp: new Date(),
              footer: {
                  text: 'CringyBot Selfbot edition'
            }
          }
        })
      }

        if (message.content.startsWith(prefix + 'hammer')) {
            message.delete();
            message.channel.sendMessage('', {
              embed: {
                color: 0x008AF3,
                image: {
                  url: 'http://i.imgur.com/O3DHIA5.gif',
                },
                timestamp: new Date(),
                footer: {
                    text: 'CringyBot Selfbot edition'
              }
            }
          })
        }


        if (message.content.startsWith(prefix + 'time')) {
            message.delete();
            message.channel.sendMessage('', {
                embed: {
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL
                    },
                    color: 0x008AF3,
                    title: "Date and time",
                    description: `${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
                    text: `CringyBot Selfbot edition`
                }
            })
        }


        if (message.content.startsWith(prefix + 'embed')) {
            message.delete();
            let args = message.content.split(" ").slice(1);
            let input = args.join(" ");
            message.channel.sendMessage('', {
                embed: {
                    color: 0x008AF3,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL
                    },
                    description: '' + input,
                    timestamp: new Date(),
                    footer: {
                        text: 'CringyBot Selfbot edition'
                    }
                }
            })
        }


        if (message.content.startsWith(prefix + 'rickroll')) {
          message.delete();
          message.channel.sendMessage('https://youtu.be/dQw4w9WgXcQ');
        }


        if (message.content.startsWith(prefix + 'git')) {
          message.delete();
          var link = "https://github.com/AdamAharony/CringyBotSelf";
          message.channel.sendMessage('', {
            embed: {
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              color: 0x008AF3,
              title: 'Github repository link:',
              description: `Click [here](${link}) to go to the Github repository.`,
              timestamp: new Date,
              footer: {
                text: 'CringyBot Selfbot edition'
              }
            }
          });
        }


        if (message.content.startsWith(prefix + 'game')) {
          message.delete();
          let args = message.content.split(" ").slice(1);
          let game = args.join(" ");
          client.user.setGame(game);
          message.channel.sendMessage('', {
            embed : {
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              title: 'Game successfully changed!',
              color: 0x008AF3,
              description: `Game changed to **${game}**!`,
              timestamp: new Date(),
              footer: {
                text: 'CringyBot Selfbot edition'
              }
            }
          })
        }


        const args = message.content.split(" ").slice(1);
        if (message.content.startsWith(prefix + "eval")) {

            try {
                var code = args.join(" ");
                var evaled = eval(code);

                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);

                message.channel.sendCode("xl", clean(evaled));
            } catch (err) {
                message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }

        }
})


client.login(token);
