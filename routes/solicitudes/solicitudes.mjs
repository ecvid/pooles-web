import express from 'express';
import {isLoggedIn} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
import {app} from "../../app.mjs";

import alert from 'alert'

export const router = express. Router();

import { getAll as getSolicitudes } from "../../models/solicitudes/crud.mjs";
import { getAll as getUnidades } from "../../models/unidades/crud.mjs";
import { getAll as getLicencias } from "../../models/licencias/crud.mjs";
import { insert as addSolicitud } from '../../models/solicitudes/crud.mjs';

router.get('/', isLoggedIn, async (req, res) => {

  let colectiuTreball;
  let mesTreball;

  if (app.locals.levelAccess === 'master') {
    res.render('master/master', {
      title: "GESTIÓN RRHH POOLES " + ANY
    })
  } else {

    if (app.locals.colectiuTreball === null) {
      app.locals.colectiuTreball = 'DUES'
      colectiuTreball = app.locals.colectiuTreball
    }

    if (app.locals.mesTreballDues === null) {
      app.locals.mesTreballDues = new Date().getMonth() + 1
      mesTreball = app.locals.mesTreballDues
    }

    let solicitudes = await getSolicitudes()

    let dadesAesEnero = []
    let dadesAesFebrero = []
    let dadesAesMarzo = []
    let dadesAesAbril = []
    let dadesAesMayo = []
    let dadesAesJunio = []
    let dadesAesJulio = []
    let dadesAesAgosto = []
    let dadesAesSeptiembre = []
    let dadesAesOctubre = []
    let dadesAesNoviembre = []
    let dadesAesDiciembre = []
    let dadesDuesEnero = []
    let dadesDuesFebrero = []
    let dadesDuesMarzo = []
    let dadesDuesAbril = []
    let dadesDuesMayo = []
    let dadesDuesJunio = []
    let dadesDuesJulio = []
    let dadesDuesAgosto = []
    let dadesDuesSeptiembre = []
    let dadesDuesOctubre = []
    let dadesDuesNoviembre = []
    let dadesDuesDiciembre = []

    solicitudes.forEach((solicitud) => {
      let mes = new Date(solicitud.dia).getMonth() + 1
      switch (solicitud.colectivo) {
        case 'AES':
          switch (mes) {
            case 1:
              dadesAesEnero.push(solicitud)
              break
            case 2:
              dadesAesFebrero.push(solicitud)
              break
            case 3:
              dadesAesMarzo.push(solicitud)
              break
            case 4:
              dadesAesAbril.push(solicitud)
              break
            case 5:
              dadesAesMayo.push(solicitud)
              break
            case 6:
              dadesAesJunio.push(solicitud)
              break
            case 7:
              dadesAesJulio.push(solicitud)
              break
            case 8:
              dadesAesAgosto.push(solicitud)
              break
            case 9:
              dadesAesSeptiembre.push(solicitud)
              break
            case 10:
              dadesAesOctubre.push(solicitud)
              break
            case 11:
              dadesAesNoviembre.push(solicitud)
              break
            case 12:
              dadesAesDiciembre.push(solicitud)
              break
          }
          break
        case 'DUES':
          switch (mes) {
            case 1:
              dadesDuesEnero.push(solicitud)
              break
            case 2:
              dadesDuesFebrero.push(solicitud)
              break
            case 3:
              dadesDuesMarzo.push(solicitud)
              break
            case 4:
              dadesDuesAbril.push(solicitud)
              break
            case 5:
              dadesDuesMayo.push(solicitud)
              break
            case 6:
              dadesDuesJunio.push(solicitud)
              break
            case 7:
              dadesDuesJulio.push(solicitud)
              break
            case 8:
              dadesDuesAgosto.push(solicitud)
              break
            case 9:
              dadesDuesSeptiembre.push(solicitud)
              break
            case 10:
              dadesDuesOctubre.push(solicitud)
              break
            case 11:
              dadesDuesNoviembre.push(solicitud)
              break
            case 12:
              dadesDuesDiciembre.push(solicitud)
              break
          }
          break
        default:
          break;
      }
    })

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
      dadesDuesDiciembre: JSON.stringify(dadesDuesDiciembre),
      colectiuTreball: JSON.stringify(colectiuTreball),
      mesTreball: JSON.stringify(mesTreball)
    })
  }

})

router.get('/anyadir', isLoggedIn, async (req, res) => {

  let unidades = await getUnidades();
  let licencias = await getLicencias();

  res.render('solicitudes/anyadir', {
    layout: false,
    unidades: JSON.stringify(unidades),
    licencias: JSON.stringify(licencias),
    mesActual: mesActual,
    anyActual: ANY
  })
})

router.post('/anyadir', isLoggedIn, async (req, res) => {

  let colectivo = req.body.colectivo

  colectiuActual = colectivo

  let unidad = req.body.unidad
  let turno = req.body.turno

  let dia = null
  if (isNaN(Date.parse(req.body.fecha))) {
    alert('Es necesario introducir una fecha válida.')
  } else {
    dia = Date.parse(req.body.fecha);
    mesActual = new Date(dia).getMonth() + 1
  }

  let licencia = req.body.licencia

  let notas = null
  if (req.body.notas !== undefined && req.body.notas !== '') {
    notas = req.body.notas
  } else notas = ''

  //console.log(colectivo + ' ' + unidad + ' ' + turno + ' ' + dia + ' ' + licencia + ' ' + notas)

  let solicitud = {
    colectivo: colectivo,
    unidad: unidad,
    turno: turno,
    dia: dia,
    licencia: licencia,
    cubre: '',
    notas: notas
  }

  await addSolicitud(solicitud)

  res.redirect('/solicitudes')

})


