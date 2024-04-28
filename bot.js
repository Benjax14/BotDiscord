const { Client, Events } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: 3276799 });

client.on(Events.ClientReady, async () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on(Events.MessageCreate, async (message) => {
    
    if(message.author.bot) return;
    if(!message.content.startsWith('!')) return;

    const args = message.content.slice(1).split(' ')[0];

    try {

        const command = require(`./commands/${args}`);
        command.run(message);

    } catch (error) {
        console.log(`Un error en la consulta -${args}`, error.message);
    }
})

client.login(process.env.TOKEN);
