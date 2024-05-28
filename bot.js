const { Client, Events, EmbedBuilder} = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: 3276799 });

client.on(Events.ClientReady, async () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

function requirehandlers(){
    ["distube"].forEach(handler =>{
        try {
            require(`./handlers/${handler}`)(client)
        } catch(e){
            console.warn(e);
        }
    })
}

requirehandlers();

client.distube.on('playSong', (queue, song) => {
    const embed = new EmbedBuilder()
      .setTitle("Reproduciendo ahora")
      .setDescription(`[${song.name}](${song.url})`)
      .setThumbnail(song.thumbnail)
      .addFields(
        { name: 'Duración', value: song.formattedDuration, inline: true },
        { name: 'Solicitado por', value: song.user.tag, inline: true }
      )
    
    queue.textChannel.send({ embeds: [embed] });
});

client.on(Events.MessageCreate, async (message) => {
    
    if(message.author.bot) return;
    if(!message.content.startsWith('!')) return;

    const args = message.content.slice(1).split(' ')[0];

    try {

        const command = require(`./commands/${args}`);
        command.run(message, client);

    } catch (error) {
        console.log(`Un error en la consulta -${args}`, error.message);
    }
});

client.login(process.env.TOKEN);
