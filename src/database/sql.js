/** Install mysql 'npm install mysql' */
import mysql from 'mysql'
import config from 'config'

const connection = mysql.createConnection({
  host: config.get('server.host'),
  user: config.get('server.user'),
  password: config.get('server.pass'),
  database: config.get('server.name'),
})

/**
 * query
 * @param {string} sentence sentence or query of sql
 * @returns
 */
export const query = (sentence) =>
  connection.query(sentence, (err, result) => {
    if (err) throw err
    return result
  })

/**
 * Open connection of the databasse
 */
export const onConnection = () => {
  connection.on()
}

/**
 * Close connection of the database
 */
export const offConnection = () => {
  connection.off()
}
