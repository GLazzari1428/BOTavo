module.exports = {
    name: 'ip',
    description: "Says the ip of the modded and vanilla server",
    execute(client, message, args, discord){
        const embed = new discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('IPs')
        .addFields(
            {name: 'Vanilla', value: 'batavo.ddns.net:*25565*'},
            {name: 'Com mods', value: 'batavo.ddns.net:*25566*'}
        )
        message.channel.send(embed);
    
    }
}


