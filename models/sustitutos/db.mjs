import Database from 'better-sqlite3'

const database = './databases/sustitutos.sqlite'

const sql_create = "CREATE TABLE IF NOT EXISTS sustitutos (" +
    " 'id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
    " 'nom' TEXT NOT NULL UNIQUE ON CONFLICT IGNORE," +
    " 'categoria' TEXT NOT NULL);"

export let db = new Database(database, Database.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message)
    }
    console.log}
)

db.exec(sql_create)

