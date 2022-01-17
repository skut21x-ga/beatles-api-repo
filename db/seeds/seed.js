const db = require('../connection')

const pg = require('pg')
const format = require('pg-format')

const { formatSongData } = require('../utils/data-manipulation')

const seed = async (data) => {
  const { songData } = data

  const dropTables = async () => {
    await db.query(`DROP TABLE IF EXISTS songs`)
  }
  await dropTables()

  return (
    db
      .query(
        `CREATE TABLE songs (
            song VARCHAR (250) PRIMARY KEY,
            lyrics VARCHAR (15000),
            writer VARCHAR (250)
            );`,
      )

      //insert data
      .then(() => {
        const formattedSongData = formatSongData(songData)
        const songInsertion = format(
          `INSERT INTO songs (song, lyrics, writer) VALUES %L RETURNING *;`,
          formattedSongData,
        )
        return db.query(songInsertion)
      })
  )
}

module.exports = seed
