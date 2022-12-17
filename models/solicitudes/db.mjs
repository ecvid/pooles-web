import Database from 'better-sqlite3'

import { ANY } from '../../utils/ANY.mjs'
const database = './databases/solicitudes_' + `${ANY}` + '.sqlite'

const sql_create = "CREATE TABLE IF NOT EXISTS solicitudes (" +
  " 'id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
  " 'colectivo' TEXT NOT NULL," +
  " 'unidad' TEXT NOT NULL," +
  " 'turno' TEXT NOT NULL," +
  " 'dia' INTEGER NOT NULL," +
  " 'licencia' TEXT NOT NULL," +
  " 'cubre' TEXT," +
  " 'notas' TEXT);"

export let db = new Database(database, Database.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message)
    }
    verbose: console.log}
)

db.exec(sql_create)

