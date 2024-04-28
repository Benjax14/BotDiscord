const {User, EmbedBuilder} = require('discord.js')

module.exports = {
    description: 'Repite display de la avatar del usuario',
    run: async(message) => {
        const target = message.mentions.users.first();

        if (!target) {
            return message.reply("Introduce un usuario válido");
        }

        const member = await message.guild.members.fetch(target.id);
        const avatar = member.user.displayAvatarURL({size: 512});

        if(!member) return message.reply("Introduce un usuario válido");

        const embed = new EmbedBuilder()
            .setColor('Blurple')
            .setTitle(`😋 Avatar de <@${member.user.id}>`)
            .setImage(avatar);

            message.reply({embeds: [embed]})

    }
  }