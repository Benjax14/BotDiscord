const DisTube = require('distube');
const {SpotifyPlugin} = require('@distube/spotify')
const {SoundCloudPlugin} = require('@distube/soundcloud')

module.exports = (client) => {

    client.distube = new DisTube.DisTube(client,{
        emitNewSongOnly: false,
        leaveOnEmpty: true,
        leaveOnFinish: true,
        leaveOnStop: true,
        savePreviousSongs: true,
        emitAddSongWhenCreatingQueue: false,
        searchSongs: 0,
        nsfw: false,
        emptyCooldown: 25,
        directLink: true,
        streamType: 0,
        ytdlOptions:{
            highWaterMark: 1024 * 1024 * 64,
            quality: "highestaudio",
            format: "audioonly",
            liveBuffer: 60000,
            dlChunkSize: 1024 * 1024 * 24,
        },
        plugins: [
            new SpotifyPlugin({
                parallel: true,
                emitEventsAfterFetching: true,

            }),
            new SoundCloudPlugin()
        ],
    })

};