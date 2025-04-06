module.exports = {
    description: "Repite los argumentos dados",
    run: async (message, client) => {
      const voiceChannel = message.member.voice?.channel;
  
      if (!voiceChannel) {
        return message.reply("Debes estar en un canal de voz!");
      }
  
      const queue = client.distube.getQueue(voiceChannel);
  
    //   if (!queue) {
    //     return message.reply("No hay mas canciones en la cola :(");
    //   }
  
      try {
          if(queue.autoplay || queue.songs.length > 1){
              await client.distube.stop(voiceChannel);
              message.reply("Saltando...");
          }else{
              client.distube.stop(voiceChannel);
          }
  
  
      } catch (error) {
          console.error(error);
          message.reply("Error al detener la canción");
      }
  
    },
  };