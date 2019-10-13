const Discord = require('discord.js');
const valkey = new Discord.Client();
const queue = new Map();
 
var valkeyw = '#'
valkey.on('ready', () => {
  console.log(`Handsome Loggin ${valkey.user.tag}!`);
});

const idvalkey = ["524657286560350209","id"]
valkey.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!idvalkey.includes(message.author.id)) return;
    
if (message.content.startsWith(valkeyw + 'sets')) {
  valkey.user.setGame(argresult, "https://www.twitch.tv/viperisbest");
    message.channel.send(`**✅ Success Change Status Streaming :  ${argresult}**`)
}
});

valkey.login('mfa.ryTlREdbYtmKy3Q67O_9PXd0dLkaTikU6M2G4I4YYXo07v6vXGZAiUUyCVIM67d8QWjhyJT2GNccub_yhwwv');

