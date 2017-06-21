/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

exports.run = (client, message, args) => {
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };

    function replaceAll(str, map){
        for(key in map){
            str = str.replaceAll(key, map[key]);
        }
        return str;
    }

    var str = args.join(' ').toLowerCase();
    var map = {
        'a' : '🇦 ',
        'b' : '🇧 ',
        'c' : '🇧 ',
        'd' : '🇩 ',
        'e' : '🇪 ',
        'f' : '🇫 ',
        'g' : '🇬 ',
        'h' : '🇭 ',
        'i' : '🇮 ',
        'j' : '🇯 ',
        'k' : '🇰 ',
        'l' : '🇱 ',
        'm' : '🇲 ',
        'n' : '🇳 ',
        'o' : '🇴 ',
        'p' : '🇵 ',
        'q' : '🇶 ',
        'r' : '🇷 ',
        's' : '🇸 ',
        't' : '🇹 ',
        'u' : '🇺 ',
        'v' : '🇻 ',
        'w' : '🇼 ',
        'x' : '🇽 ',
        'y' : '🇾 ',
        'z' : '🇿 ',
        ' ' : '   '
    };

    message.edit(replaceAll(str, map));
};
