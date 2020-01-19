require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

let botre = /^!(\S+) (.+?$)/;
let calleditChannelId = '668515113904504863';
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
});

bot.on('message', msg => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (parsed_msg = botre.exec(msg.content)) {
        let cmd = parsed_msg[1];
        let v = parsed_msg[2];
        //console.log(parsed_msg);
        //console.log("checking:"+cmd+" "+v);
        switch(cmd) {
            // !calledit
            case 'calledit':
                //console.log(msg);
                postData = `${msg.author} has CALLED IT: ${v}`;
                msg.channel.send(postData);
                cI = bot.channels.get(calleditChannelId)
                if (cI == null) {
                    console.log('No channel calledit found');
                    //console.log(bot.channels)
                } else {
                    cI.send(postData);
                }
            break;
            // Just add any case commands if you want to..
            }
        }
    });
bot.login(process.env.BOT_TOKEN);

