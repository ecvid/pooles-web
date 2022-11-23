import * as database from './db.mjs'
const db = database.db

export function getAll () {
    const sql = db.prepare(`SELECT * FROM sustitutos ORDER BY nom`)
    return sql.all()
}

export function insert (nom, categoria) {
    const sql = db.prepare('INSERT INTO sustitutos (nom, categoria) VALUES (?,?)')
    return sql.run(nom, categoria)
}

export function remove (nom) {
    const sql = db.prepare('DELETE FROM sustitutos WHERE nom = ?')
    return sql.run(nom)
}

export function update (sustituto, nuevoSustituto) {
    const sql = db.prepare('UPDATE sustitutos SET nom = ? WHERE nom = ?')
    return sql.run(nuevoSustituto, sustituto)
}
