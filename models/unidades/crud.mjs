import * as database from './db.mjs'
const db = database.db

export function getAll () {
    const sql = db.prepare(`SELECT * FROM unidades ORDER BY unidad`)
    return sql.all()
}

export function insert (unidad) {
    const sql = db.prepare('INSERT INTO unidades (unidad) VALUES (?)')
    return sql.run(unidad)
}

export function remove (unidad) {
    const sql = db.prepare('DELETE FROM unidades WHERE unidad = ?')
    return sql.run(unidad)
}

export function update (unidad, nuevaUnidad) {
    const sql = db.prepare('UPDATE unidades SET unidad = ? WHERE unidad = ?')
    return sql.run(nuevaUnidad, unidad)
}
