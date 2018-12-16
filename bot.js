const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();

client.on('message', msg => {
  if (msg.content === '#test') {
    msg.channel.send('Test Successful');
    msg.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
  }
});


client.login(process.env.BOT_TOKEN); 
client2.login(process.env.BOT_TOKEN2); 
client3.login(process.env.BOT_TOKEN3); 
client4.login(process.env.BOT_TOKEN4); 
client5.login(process.env.BOT_TOKEN5);
client6.login(process.env.BOT_TOKEN6);
client7.login(process.env.BOT_TOKEN7);
client8.login(process.env.BOT_TOKEN8);
