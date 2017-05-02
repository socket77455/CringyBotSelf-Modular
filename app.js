/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require('moment');
const config = require("./config.json");
let prefix = require("./config.json").prefix;
let token = require("./config.json").token;
require('moment-duration-format');
const package = require("./package.json");
const version = require("./package.json").version;
const google = require('google');
var afk;

// Clean function for the eval command:
function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}


client.on('ready', () => {
    console.log(`------------------------`);
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`------------------------`);
    console.log(`Cringy logs:`);
    afk = false;
    client.user.setGame("ecks dee");
});

client.on('message', message => {
    if (message.author.id !== client.user.id) return;

        if (message.content.startsWith(prefix + 'shutdown')) {
            message.delete();
            process.exit();
        }


        if (message.content.startsWith(prefix + 'afk')) {
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
          console.log(prefix + 'afk');
        }


        if (message.content.startsWith(prefix + 'info')) {
            message.delete();
            message.channel.send('', {
                embed: {
                    author: {
                      name: client.user.username
                    },
                    color: 0x008AF3,
                    title: "CringyBot Selfbot edition info:",
                    description: 'This selfbot is made by Adam Aharony (a.k.a. Cringy Adam).\n(Twitter: @AdamAharony)\nAiming to make the discord experience much better.',
                    timestamp: new Date(),
                    footer: {
                      text: 'CringyBot Selfbot edition',
                      icon_url: client.user.avatarURL
                    }
                }
            });
            console.log(prefix + 'info');
        }

        if (message.content.startsWith(prefix + 'ping')) {
            message.delete();
            message.channel.send('', {
                embed: {
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL
                    },
                    color: 0x008AF3,
                    title: "Pong",
                    description: `${client.ping} MS.`
                }
            });
            console.log(prefix + 'ping');
        }


        if (message.content.startsWith(prefix + 'google')) {
          let args = message.content.split(" ").slice(1);
          let input = args.join(" ");
          google.resultsPerPage = 1
          var nextCounter = 0
          google(input, function (err, res){
             if (err) console.error(err);
              for (var i = 0; i < res.links.length; ++i) {
              var link = res.links[i];
              message.delete();
              message.channel.send('', {
                embed: {
                  author: {
                    name: client.user.username,
                    icon_url: "http://i.imgur.com/EdV2r11.png"
                  },
                  title: `${link.title}`,
                  url: `${link.href}`,
                  color: 0x008AF3,
                  description: `${link.description}\n**Click [here](${link.href}) to go to the link.**`,
                  timestamp: new Date(),
                  footer: {
                    text: 'CringyBot Normal edition',
                    icon_url: client.user.avatarURL
                  }
                }
              })
            }
          })
          console.log(prefix + `google ${input}`);
        }

        if (message.content.startsWith(prefix + 'help')) {
            message.delete();
            message.channel.send('', {
                embed: {
                  author: {
                    name: client.user.username
                  },
                    color: 0x008AF3,
                    title: "CringyBot Selfbot edition Help",
                    description: `**${config.prefix}info** - shows info about the bot.\n**${config.prefix}github** - sends link to github.\n**${config.prefix}help** - Displays this message.\n**${config.prefix}google** - searches Google.\n**${config.prefix}nick** - changes your nickname on this server.\n**${config.prefix}game** - changes the game you're playing.\n**${config.prefix}stream** - changes the streaming status.\n**${config.prefix}embed** - puts messages in an embed with your user name and profile pic.\n**${config.prefix}smallembed** - embeds stuff in a smaller form.\n**${config.prefix}status** - displays info about you.\n**${config.prefix}eval/exec** - evaluates and executes JS code that's it.\n**${config.prefix}hammer** - sends the discord ban hammer gif.\n**${config.prefix}lenny** - sends a bold lenny face.\n**${config.prefix}lewis/levis** - shows a really good pic of ya boi Lew.\n**${config.prefix}rickroll** - sends a link to the song.\n**${config.prefix}ping** - really? do you need a description for that?\n**${config.prefix}shutdown** - shuts the selfbot down.\n**${config.prefix}restart** - restarts the bot.\n**${config.prefix}time** - shows the server's time.`,
                timestamp: new Date(),
                footer: {
                    text: 'CringyBot Selfbot edition',
                    icon_url: client.user.avatarURL
                }
            }
        });
        console.log(prefix + 'help');
      }




        if (message.content.startsWith(prefix + 'status')) {
            message.delete();
            message.channel.send('', {
                embed: {
                  author: {
                    name: client.user.username
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
                        text: 'CringyBot Selfbot edition',
                        icon_url: client.user.avatarURL
                    }
                }
            });
            console.log(prefix + 'status');
        }


        if (message.content.startsWith(prefix + 'nick')) {
          let args = message.content.split(" ").slice(1);
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
            console.log(prefix + 'nick');
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
              console.log(prefix + 'nick');
            }
          }


        if (message.content.startsWith(prefix + 'lewis') || message.content.startsWith(prefix + 'levis')) {
          message.delete();
          message.channel.send('', {
            embed: {
              color: 0x008AF3,
              image: {
                url: 'http://i.adampro.cu.cc/levis.png',
              },
              timestamp: new Date(),
              footer: {
                  text: 'CringyBot Selfbot edition',
                  icon_url: client.user.avatarURL
            }
          }
        });
        console.log(prefix + 'lewis/levis');
      }

        if (message.content.startsWith(prefix + 'hammer')) {
            message.delete();
            message.channel.send('', {
              embed: {
                color: 0x008AF3,
                image: {
                  url: 'http://i.imgur.com/O3DHIA5.gif',
                },
                timestamp: new Date(),
                footer: {
                    text: 'CringyBot Selfbot edition',
                    icon_url: client.user.avatarURL
              }
            }
          });
          console.log(prefix + 'hammer');
        }


        if (message.content.startsWith(prefix + 'time')) {
            message.delete();
            message.channel.send('', {
                embed: {
                    author: {
                      name: client.user.username
                    },
                    color: 0x008AF3,
                    title: "Date and time",
                    description: `${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
                    footer: {
                      text: 'CringyBot Selfbot edition',
                      icon_url: client.user.avatarURL
                    }
                }
            });
            console.log(prefix + 'time');
        }


        if (message.content.startsWith(prefix + 'embed')) {
            message.delete();
            let args = message.content.split(" ").slice(1);
            let input = args.join(" ");
            message.channel.send('', {
                embed: {
                    color: 0x008AF3,
                    author: {
                      name: client.user.username
                    },
                    description: '' + input,
                    timestamp: new Date(),
                    footer: {
                        text: 'CringyBot Selfbot edition',
                        icon_url: client.user.avatarURL
                    }
                }
            });
            console.log(prefix + 'embed');
        }


        if (message.content.startsWith(prefix + 'smallembed')) {
            message.delete();
            let args = message.content.split(" ").slice(1);
            let input = args.join(" ");
            message.channel.send('', {
                embed: {
                    color: 0x008AF3,
                    description: '' + input,
                }
            });
            console.log(prefix + 'smallembed');
        }


        if (message.content.startsWith(prefix + 'rickroll')) {
          message.delete();
          message.channel.send('https://youtu.be/dQw4w9WgXcQ');
          console.log(prefix + 'rickroll');
        }


        if (message.content.startsWith(prefix + 'github')) {
          message.delete();
          var link = "https://github.com/CringyAdam/CringyBotSelf";
          message.channel.send('', {
            embed: {
              author: {
                name: client.user.username
              },
              color: 0x008AF3,
              title: 'Github repository link:',
              description: `Click [here](${link}) to go to the CringyBotSelf Github repository.`,
              timestamp: new Date,
              footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
              }
            }
          });
          console.log(prefix + 'github');
        }


        if (message.content.startsWith(prefix + 'game')) {
          message.delete();
          let args = message.content.split(" ").slice(1);
          let game = args.join(" ");
          client.user.setGame(game);
          message.channel.send('', {
            embed : {
              author: {
                name: client.user.username
              },
              title: 'Game successfully changed!',
              color: 0x008AF3,
              description: `Game changed to **${game}**!`,
              timestamp: new Date(),
              footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
              }
            }
          });
          console.log(prefix + 'game');
        }


        if (message.content.startsWith(prefix + 'lenny')) {
          message.delete();
          message.channel.send('**( ͡° ͜ʖ ͡°)**');
          console.log(prefix + 'lenny');
        }


        if (message.content.startsWith(prefix + 'kick')) {
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
            console.log(prefix + 'kick ' + kickMember);
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
            console.log(prefix + 'kick ' + kickMember);
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
            console.log(prefix + 'kick ' + kickMember);
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
                description: 'Ohh, that felt good.',
                timestamp: new Date(),
                footer: {
                  text: 'CringyBot Selfbot edition',
                  icon_url: client.user.avatarURL
                }
              }
            });
          });
          console.log(prefix + 'kick ' + kickMember);
        }


        if (message.content.startsWith(prefix + 'stream')) {
          let args = message.content.split(" ").slice(1);
          let stream = args.join(" ");
          client.user.setGame(stream, 'http://twitch.tv/cringyadam');
          message.delete();
          message.channel.send('', {
            embed : {
              author: {
                name: client.user.username
              },
              title: 'Streaming status successfully changed!',
              color: 0x008AF3,
              description: `Streaming info changed to **${stream}**!`,
              timestamp: new Date(),
              footer: {
                text: 'CringyBot Normal edition',
                icon_url: client.user.avatarURL
              }
            }
          });
          console.log(prefix + 'stream');
        }


        if (message.content.startsWith(prefix + 'eval') || message.content.startsWith(prefix + 'exec')) {
          const args = message.content.split(" ").slice(1);
          try {
                var code = args.join(" ");
                var evaled = eval(code);
                if (typeof evaled !== "string") {
                    evaled = require("util").inspect(evaled);
                } else if (code == 'client.token' || code == 'token' || evaled == 'client.token' || evaled == 'token') {
                  message.channel.send('', {
                    embed: {
                      author: {
                        name: client.user.username
                      },
                      color: 0x88AF3,
                      title: 'Security warning!',
                      description: 'Successfully blocked token leak!',
                      timestamp: new Date(),
                      footer: {
                        text: 'CringyBot Selfbot edition',
                        icon_url: client.user.avatarURL
                      }
                    }
                  });
                  return;
                }
                message.channel.sendCode("xl", clean(evaled));
            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
            console.log(prefix + 'eval/exec ' + evaled);
        }
  });


client.login(token);
