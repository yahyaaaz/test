const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame(`〄  Being lonely and not pathetic ♡
 `,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});







client.login("MzI2NTI3Nzk4MTY2NTUyNTg2.Dw0qBw.Q8HoPliJkzbbxSvrhCd8u6UX6cw");
