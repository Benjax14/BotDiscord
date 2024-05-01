module.exports = {
    description: 'Repite los argumentos dados',
    run: async(message, client) => {

        const args = message.content.split(' ').slice(1).join(' ');
        
        client.distube.play(message.member.voice?.channel, args,{
            member:message.member,
            textChannel: message.channel,
            message
        });
        message.reply(`🔍 **Buscando~~`)

    }
}