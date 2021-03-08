module.exports = {
    name: 'clear',
    description: "",
    async execute(client, message, args, discord){
        if(!args[0]) return message.reply("**Por favor insira a quantidade de mensagens que você quer remover!**");
        if(isNaN(args[0])) return message.reply("**Por favor insira um número real!**");
        
        if(args[0] > 100) return message.reply("**Você não pode remover mais de 100 mensagens!**");
        if(args[0] < 1) return message.reply("**Você precisa remover pelo menos uma mensagem!**");
    
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}