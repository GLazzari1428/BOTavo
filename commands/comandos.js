module.exports = {
    name: 'comandos',
    description: "Returns all of the bot's commands",
    execute(client, message, args, discord){
        const embed = new discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Comandos')
            .addFields(
                {name: '!ip', value: 'Os IPs dos servidores de minecraft.'},
                {name: '!portas', value: 'As portas dos servidores de minecraft.'},
                {name: '!status *x*', value: 'Retorna o status atual do servidor (x = porta do servidor).'},
                {name: '!modpack', value: 'Link da versão mais atual do modpack.'},
                {name: '!clear *x*', value: 'Remove *x* mensagens.'},
                {name: '!ping', value: 'Se retornar *pong* o bot está online.'},
                {name: '!batavo', value: 'W.I.P'}
            )
            message.channel.send(embed);

    }
}