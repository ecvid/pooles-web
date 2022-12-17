import express from 'express';
import {isLoggedIn} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
import {app} from "../../app.mjs";

export const router = express. Router();

import {getAll} from "../../models/solicitudes/crud.mjs";

router.get('/', isLoggedIn, (req, res) => {
  if (app.locals.levelAccess === 'master') {
    res.render('master/master', {
      title: "GESTIÓN RRHH POOLES " + ANY
    })
  } else {

    let solicitudes = getAll()

    let dadesAesEnero = []
    let dadesAesFebrero = null
    let dadesAesMarzo = null
    let dadesAesAbril = null
    let dadesAesMayo = null
    let dadesAesJunio = null
    let dadesAesJulio = null
    let dadesAesAgosto = null
    let dadesAesSeptiembre = null
    let dadesAesOctubre = null
    let dadesAesNoviembre = []
    let dadesAesDiciembre = null
    let dadesDuesEnero = null
    let dadesDuesFebrero = null
    let dadesDuesMarzo = null
    let dadesDuesAbril = null
    let dadesDuesMayo = null
    let dadesDuesJunio = null
    let dadesDuesJulio = null
    let dadesDuesAgosto = null
    let dadesDuesSeptiembre = null
    let dadesDuesOctubre = null
    let dadesDuesNoviembre = []
    let dadesDuesDiciembre = null

    solicitudes.forEach((solicitud) => {
      let mes = new Date(solicitud.dia).getMonth()+1
      switch (solicitud.colectivo) {
        case 'AES':
          switch (mes) {
            case 1:
              dadesAesEnero.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 2:
              dadesAesFebrero.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 3:
              dadesAesMarzo.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 4:
              dadesAesAbril.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 5:
              dadesAesMayo.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 6:
              dadesAesJunio.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 7:
              dadesAesJulio.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 8:
              dadesAesAgosto.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 9:
              dadesAesSeptiembre.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 10:
              dadesAesOctubre.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 11:
              dadesAesNoviembre.push(solicitud)
              break
            case 12:
              dadesAesDiciembre.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
          }
          break
        case 'DUES':
          switch (mes) {
            case 1:
              dadesDuesEnero.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 2:
              dadesDuesFebrero.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 3:
              dadesDuesMarzo.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 4:
              dadesDuesAbril.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 5:
              dadesDuesMayo.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 6:
              dadesDuesJunio.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 7:
              dadesDuesJulio.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 8:
              dadesDuesAgosto.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 9:
              dadesDuesSeptiembre.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 10:
              dadesDuesOctubre.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
            case 11:
              dadesDuesNoviembre.push([solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas])
              break
            case 12:
              dadesDuesDiciembre.push(JSON.stringify(solicitud.id, solicitud.colectivo, solicitud.unidad, solicitud.turno, solicitud.dia, solicitud.licencia, solicitud.cubre, solicitud.notas))
              break
          }
          break
        default:
          break;
      }
    })

    console.log(dadesDuesNoviembre)

    res.render('solicitudes/solicitudes', {
      title: "GESTIÓN RRHH POOLES " + ANY,
      dadesAesEnero: JSON.stringify(dadesAesEnero),
      dadesAesFebrero: JSON.stringify(dadesAesFebrero),
      dadesAesMarzo: JSON.stringify(dadesAesMarzo),
      dadesAesAbril: JSON.stringify(dadesAesAbril),
      dadesAesMayo: JSON.stringify(dadesAesMayo),
      dadesAesJunio: JSON.stringify(dadesAesJunio),
      dadesAesJulio: JSON.stringify(dadesAesJulio),
      dadesAesAgosto: JSON.stringify(dadesAesAgosto),
      dadesAesSeptiembre: JSON.stringify(dadesAesSeptiembre),
      dadesAesOctubre: JSON.stringify(dadesAesOctubre),
      dadesAesNoviembre: JSON.stringify(dadesAesNoviembre),
      dadesAesDiciembre: JSON.stringify(dadesAesDiciembre),
      dadesDuesEnero: JSON.stringify(dadesDuesEnero),
      dadesDuesFebrero: JSON.stringify(dadesDuesFebrero),
      dadesDuesMarzo: JSON.stringify(dadesDuesMarzo),
      dadesDuesAbril: JSON.stringify(dadesDuesAbril),
      dadesDuesMayo: JSON.stringify(dadesDuesMayo),
      dadesDuesJunio: JSON.stringify(dadesDuesJunio),
      dadesDuesJulio: JSON.stringify(dadesDuesJulio),
      dadesDuesAgosto: JSON.stringify(dadesDuesAgosto),
      dadesDuesSeptiembre: JSON.stringify(dadesDuesSeptiembre),
      dadesDuesOctubre: JSON.stringify(dadesDuesOctubre),
      dadesDuesNoviembre: JSON.stringify(dadesDuesNoviembre),
      dadesDuesDiciembre: JSON.stringify(dadesDuesDiciembre)
    })
  }
})

