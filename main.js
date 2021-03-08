const Discord = require('discord.js');

const client = new Discord.Client(); 

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () => {
    client.user.setActivity('!comandos', { type: "PLAYING" }).catch(console.error)
})


client.login('ODE2NzY0MzI0MDU1NDgyNDA4.YD_tDQ.Ajof_0MRzZIzQO7K4ZOVhjIbNZs');