module.exports = {
    name: 'portas',
    description: "",
    execute(client, message, args, discord){
        const embed = new discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Portas')
        .addFields(
            {name: 'Vanilla', value: '*25565*'},
            {name: 'Com mods', value: '*25566*'}
        )
        message.channel.send(embed);
    }
}