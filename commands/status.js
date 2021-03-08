const { DiscordAPIError } = require('discord.js');
const util = require('minecraft-server-util');
const message = require('../events/guild/message');

module.exports = {
    name: 'status',
    description: "Show the status of the server",
    execute(client, message, args, discord){

        if(!args[0]) return message.channel.send('Por favor escreva uma PORTA');
        util.status('192.168.0.81', {port: parseInt(args[0])}).then((response) =>{
            console.log(response)
            const embed = new discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Status do servidor')
            .addFields(
                {name: 'IP do servidor', value: 'batavo.ddns.net'},
                {name: 'Players online', value: response.onlinePlayers},
                {name: 'Versão do minecraft', value: response.version}
            )
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('Ocorreu um erro (o servidor está fechado)');
            throw error;
        })
    }
}