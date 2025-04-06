const DisTube = require('distube');
const {SpotifyPlugin} = require('@distube/spotify')
const {SoundCloudPlugin} = require('@distube/soundcloud')
const fs = require("fs");

module.exports = (client) => {

    client.distube = new DisTube.DisTube(client,{
        emitNewSongOnly: false,
        leaveOnEmpty: false,
        leaveOnFinish: false,
        leaveOnStop: true,
        savePreviousSongs: true,
        emitAddSongWhenCreatingQueue: false,
        searchSongs: 0,
        nsfw: false,
        emptyCooldown: 60,
        directLink: true,
        streamType: 0,
        ytdlOptions:{
            highWaterMark: 1024 * 1024 * 64,
            quality: "highestaudio",
            format: "audioonly",
            liveBuffer: 60000,
            dlChunkSize: 1024 * 1024 * 24,
        },
        youtubeCookie: JSON.parse(fs.readFileSync("./cookies.json")),
        plugins: [
            new SpotifyPlugin({
                parallel: true,
                emitEventsAfterFetching: true,
            }),
            new SoundCloudPlugin()
        ],
    })

};