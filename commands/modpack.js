module.exports = {
    name: 'modpack',
    description: "",
    execute(client, message, args, discord){
        const embed = new discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Modpack')
        .addFields(
            {name: 'Link do modpack', value: 'https://drive.google.com/drive/folders/1nTQyb0hC60gIDzFjX6NXdYBNX4dG58k3?usp=sharing'}
        )
        message.channel.send(embed);
    
    }
}
