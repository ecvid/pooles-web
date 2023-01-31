import express from 'express';
import {isAdmin, isLoggedIn} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
import {app} from "../../app.mjs";
import moment from 'moment'

import notifier from 'node-notifier'

export const router = express. Router();

import * as crudSolicitudes from "../../models/solicitudes/crud.mjs";
import { getAll as getUnidades } from "../../models/unidades/crud.mjs";
import { getAll as getLicencias } from "../../models/licencias/crud.mjs";
import { insert as addSolicitud } from '../../models/solicitudes/crud.mjs';

router.get('/variables', isLoggedIn, (req, res) => {

  if (app.locals.colectiuTreball === 'DUES') {
        res.json({colectiu: 'DUES', mes: JSON.stringify(app.locals.mesTreballDues)})
    } else {
        res.json({colectiu: 'AES', mes: JSON.stringify(app.locals.mesTreballAes)})
    }
})

router.post('/variables', isLoggedIn, async (req, res) => {

  /*let mes;
  if (req.body.mes < 10) {
    mes = "0"+req.body.mes
  } else {
    mes = req.body.mes
  }*/

  await updateVariables();

  function updateVariables() {
    if (req.body.colectiu === 'DUES') {
      app.locals.colectiuTreball = 'DUES';
      app.locals.mesTreballDues = req.body.mes;
    } else {
      app.locals.colectiuTreball = 'AES';
      app.locals.mesTreballAes = req.body.mes;
    }
  }

  res.send('OK')
})

router.get('/', isLoggedIn, async (req, res) => {

    let solicitudes = await crudSolicitudes.getAll();

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

  if (app.locals.colectiuTreball === null) {
    app.locals.colectiuTreball = 'DUES'
    app.locals.mesTreballDues = new Date().getMonth() + 1
  }

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
      colectiuTreball: JSON.stringify(app.locals.colectiuTreball),
      mesTreballDues: JSON.stringify(app.locals.mesTreballDues),
      mesTreballAes: JSON.stringify(app.locals.mesTreballAes)
    })

})

router.get('/anyadir', isLoggedIn, async (req, res) => {

  let unidades = await getUnidades();
  let licencias = await getLicencias();

  res.render('solicitudes/anyadir', {
    layout: false,
    unidades: JSON.stringify(unidades),
    licencias: JSON.stringify(licencias),
    colectiuTreball: app.locals.colectiuTreball,
    mesTreballDues: app.locals.mesTreballDues,
    mesTreballAes: app.locals.mesTreballAes,
    anyActual: ANY
  })
})

router.post('/anyadir', isLoggedIn, async (req, res) => {

  let totOK = true

  let colectivo;
  if (req.body.colectivo !== undefined) {
    colectivo = req.body.colectivo
  } else {
    //alert('Es necesario introducir el colectivo.')
    notifier.notify('Es necesario introducir el colectivo.')
    totOK = false
  }

  let unidad;
  if (req.body.unidad !== undefined) {
    unidad = req.body.unidad
  } else {
    //alert('Es necesario introducir la unidad.')
    notifier.notify('Es necesario introducir la unidad.')
    totOK = false
  }

  let turno;
  if (req.body.turno !== undefined) {
    turno = req.body.turno
  } else {
    //alert('Es necesario introducir el turno.')
    notifier.notify('Es necesario introducir el turno.')
    totOK = false
  }

  let dia;
  if (isNaN(Date.parse(req.body.fecha))) {
    //alert('Es necesario introducir una fecha válida.')
    notifier.notify('Es necesario introducir una fecha válida.')
    totOK = false
  } else {
    dia = Date.parse(req.body.fecha);
    if (req.body.colectivo === 'DUES') {
      app.locals.mesTreballDues = new Date(dia).getMonth() + 1
    } else {
      app.locals.mesTreballAes = new Date(dia).getMonth() + 1
    }
  }

  let licencia;
  if (req.body.licencia !== undefined) {
    licencia = req.body.licencia
  } else {
    //alert('Es necesario introducir la licencia.')
    notifier.notify('Es necesario introducir la licencia.')
    totOK = false
  }

  let cubre = '';

  let notas;
  if (req.body.notas !== undefined && req.body.notas !== '') {
    notas = req.body.notas
  } else notas = ''

  //console.log(colectivo + ' ' + unidad + ' ' + turno + ' ' + dia + ' ' + licencia + ' ' + notas)

  if (totOK) {
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
  }
})

router.get('/eliminar', isAdmin, async (req, res) => {

  let solicitud = crudSolicitudes.getById(req.query.id);

  res.render('solicitudes/eliminar', {
    layout: false,
    id: req.query.id,
    colectivo: solicitud.colectivo,
    unidad: solicitud.unidad,
    turno: solicitud.turno,
    dia: moment(solicitud.dia).format('DD/MM/YYYY'),
    licencia: solicitud.licencia,
    cubre: solicitud.cubre,
    notas: solicitud.notas
  })
})

router.post('/eliminar', isAdmin, async (req, res) => {
  await crudSolicitudes.remove(req.body.id);
  res.redirect('/solicitudes')
})


