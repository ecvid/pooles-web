const Database = require('better-sqlite3')

const ANY = require('../../utils/ANY')

const sql_create = "CREATE TABLE IF NOT EXISTS solicitudes (" +
  " 'id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
  " 'categoria' TEXT NOT NULL," +
  " 'unidad' TEXT NOT NULL," +
  " 'turno' TEXT NOT NULL," +
  " 'dia' INTEGER NOT NULL," +
  " 'licencia' TEXT NOT NULL," +
  " 'cubre' TEXT," +
  " 'notas' TEXT);"

  const database = './databases/solicitudes_' + `${ANY}` + '.sqlite'

let db = new Database(database, Database.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message)
    }
    verbose: console.log}
)

db.exec(sql_create)

module.exports = {
    db: db
}
