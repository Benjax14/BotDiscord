module.exports = {
  description: "Repite los argumentos dados",
  run: async (message, client) => {
    const args = message.content.split(" ").slice(1).join(" ");

    const voiceChannel = message.member.voice?.channel;

    if (!voiceChannel) {
      return message.reply("Debes estar en un canal de voz!");
    }

    try {
      client.distube.play(voiceChannel, args, {
        member: message.member,
        textChannel: message.channel,
        message,
      });
      message.reply(`🔍 **Buscando**`);
    } catch (error) {
      console.error(error);
      message.reply("Error al reproducir la canción");
    }
  },
};
