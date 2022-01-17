const { songData } = require('../data/lyrics')

exports.formatSongData = (songData) => {
  // make it [[song, lyrics, writer]]
  // console.log(songData[0])
  const formattedSongData = songData.map((song) => {
    return [song.Song, song.Lyrics, song.Name]
  })
  return formattedSongData
}
