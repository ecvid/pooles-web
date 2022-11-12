import Database from 'better-sqlite3'

const database = './databases/licencias.sqlite'

const sql_create = "CREATE TABLE IF NOT EXISTS licencias (" +
    " 'id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
    " 'licencia' TEXT NOT NULL UNIQUE ON CONFLICT IGNORE);"

export let db = new Database(database, Database.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message)
    }
    console.log}
)

db.exec(sql_create)

