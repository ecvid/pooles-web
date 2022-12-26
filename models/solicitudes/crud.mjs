import * as database from './db.mjs'
const db = database.db

export async function getAll() {
    let sql = db.prepare(`SELECT * FROM solicitudes`)
    return await sql.all()
}

export function getById (id) {
    const solicitud = db.prepare('SELECT * FROM solicitudes WHERE id = ?').get(id)
    return {
        colectivo: solicitud.categoria,
        unidad: solicitud.unidad,
        turno: solicitud.turno,
        dia: solicitud.dia,
        licencia: solicitud.licencia,
        cubre: solicitud.cubre,
        notas: solicitud.notas
    }
}

export function insert (solicitud) {
    const sql = db.prepare('INSERT INTO solicitudes (categoria, unidad, turno, dia, licencia, cubre, notas) VALUES (?,?,?,?,?,?,?)')
    return sql.run(
      solicitud.colectivo,
      solicitud.unidad,
      solicitud.turno,
      solicitud.dia,
      solicitud.licencia,
      "",
      solicitud.notas
    )
}

export function remove (idSolicitud) {
    const sql = db.prepare('DELETE FROM solicitudes WHERE id = ?')
    return sql.run(idSolicitud)
}

export function update (idSolicitudAntiga, novaSolicitud) {
    let sql = db.prepare('UPDATE solicitudes ' +
      'SET categoria = ?, ' +
      'unidad = ?, ' +
      'turno = ?, ' +
      'dia = ?, ' +
      'licencia = ?, ' +
      'cubre = ?, ' +
      'notas = ? ' +
      'WHERE id = ?')
    return sql.run(
      novaSolicitud.colectivo,
      novaSolicitud.unidad,
      novaSolicitud.turno,
      novaSolicitud.dia,
      novaSolicitud.licencia,
      novaSolicitud.cubre,
      novaSolicitud.notas,
      idSolicitudAntiga)
}

