import * as database from './db.mjs'
const db = database.db

export function getAll () {
    const sql = db.prepare(`SELECT * FROM licencias ORDER BY licencia`)
    return sql.all()
}

export function insert (licencia) {
    const sql = db.prepare('INSERT INTO licencias (licencia) VALUES (?)')
    return sql.run(licencia)
}

export function remove (licencia) {
    const sql = db.prepare('DELETE FROM licencias WHERE licencia = ?')
    return sql.run(licencia)
}

export function update (licencia, nuevaLicencia) {
    const sql = db.prepare('UPDATE licencias SET licencia = ? WHERE licencia = ?')
    return sql.run(nuevaLicencia, licencia)
}
