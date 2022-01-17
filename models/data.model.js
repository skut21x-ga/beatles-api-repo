const db = require('../db/connection')

exports.fetchData = () => {
  return db.query(`SELECT * FROM songs;`).then((result) => {
    return result.rows
  })
}
