import express from 'express';
import {isAdmin, isLoggedIn} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
import {app} from "../../app.mjs";
import moment from 'moment'

export const router = express. Router();

import * as crudSolicitudes from "../../models/solicitudes/crud.mjs";
import { getAll as getUnidades } from "../../models/unidades/crud.mjs";
import { getAll as getLicencias } from "../../models/licencias/crud.mjs";
import { getAll as getSustitutos } from "../../models/sustitutos/crud.mjs";

router.get('/variablescolectiu', isLoggedIn, (req, res) => {

  if (app.locals.colectiuTreball === 'DUES') {
    res.json({colectiu: 'DUES', mesTreballDues: JSON.stringify(app.locals.mesTreballDues), mesTreballAes: JSON.stringify(app.locals.mesTreballAes)})
  } else {
    res.json({colectiu: 'AES', mesTreballDues: JSON.stringify(app.locals.mesTreballDues), mesTreballAes: JSON.stringify(app.locals.mesTreballAes)})
  }
})

router.post('/variablescolectiu', isLoggedIn, async (req, res) => {

  await updateVariables();

  function updateVariables() {
    if (req.body.colectiu === 'DUES') {
      app.locals.colectiuTreball = 'DUES';
    } else {
      app.locals.colectiuTreball = 'AES';
    }
  }

  res.send('OK')
})

router.post('/id', isLoggedIn, async (req, res) => {

  app.locals.id = req.body.id;

  res.send('OK')
})

router.get('/', isLoggedIn, async (req, res) => {

  let solicitudes = await crudSolicitudes.getAll();

  let dadesAes = []
  let dadesDues = []

  solicitudes.forEach((solicitud) => {
    solicitud.dia = moment(new Date(solicitud.dia)).format('DD/MM/YYYY')
    switch (solicitud.colectivo) {
      case 'AES':
        dadesAes.push(solicitud)
        break
      case 'DUES':
        dadesDues.push(solicitud)
        break
    }
  })

  if (app.locals.colectiuTreball === null) {
    app.locals.colectiuTreball = 'DUES'
  }

  res.render('solicitudesPendientes/solicitudesPendientes', {
    title: "GESTIÓN RRHH POOLES " + ANY,
    dadesAes: JSON.stringify(dadesAes),
    dadesDues: JSON.stringify(dadesDues),
    colectiuTreball: JSON.stringify(app.locals.colectiuTreball)
  })

})

router.get('/eliminarPendientes', isAdmin, async (req, res) => {

  let solicitud = crudSolicitudes.getById(app.locals.id);

  res.render('solicitudesPendientes/eliminarPendientes', {
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

router.post('/eliminarPendientes', isAdmin, async (req, res) => {
  await crudSolicitudes.remove(app.locals.id);
  res.redirect('/solicitudesPendientes')
})

router.get('/actualizarPendientes', isAdmin, async (req, res) => {

  let solicitud = crudSolicitudes.getById(app.locals.id)

  let unidades = await getUnidades();
  let licencias = await getLicencias();
  let sustitutos = await getSustitutos();

  let fecha = moment(solicitud.dia).format('DD/MM/YYYY')
  let _dia = fecha.substring(0,2)
  let _mes = fecha.substring(3,5)

  res.render('solicitudesPendientes/actualizarPendientes', {
    layout: false,
    id: JSON.stringify(app.locals.id),
    unidades: JSON.stringify(unidades),
    licencias: JSON.stringify(licencias),
    sustitutos: JSON.stringify(sustitutos),
    colectivo: JSON.stringify(solicitud.colectivo),
    unidad: JSON.stringify(solicitud.unidad),
    turno: JSON.stringify(solicitud.turno),
    dia: JSON.stringify(_dia),
    mes: JSON.stringify(_mes),
    licencia: JSON.stringify(solicitud.licencia),
    cubre: JSON.stringify(solicitud.cubre),
    notas: JSON.stringify(solicitud.notas),
    colectiuTreball: JSON.stringify(app.locals.colectiuTreball),
    mesTreballDues: JSON.stringify(app.locals.mesTreballDues),
    mesTreballAes: JSON.stringify(app.locals.mesTreballAes),
    anyActual: JSON.stringify(ANY)
  })

})

router.post('/actualizarPendientes', isAdmin, async (req, res) => {

  let totOK = true

  let colectivo;
  if (req.body.colectivo !== undefined) {
    colectivo = req.body.colectivo
  } else {
    totOK = false
  }

  let unidad;
  if (req.body.unidad !== undefined) {
    unidad = req.body.unidad
  } else {
    totOK = false
  }

  let turno;
  if (req.body.turno !== undefined) {
    turno = req.body.turno
  } else {
    totOK = false
  }

  let dia;
  if (isNaN(Date.parse(req.body.fecha))) {
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
    totOK = false
  }

  let cubre;
  if (req.body.cubre !== undefined) {
    cubre = req.body.cubre
  } else {
    totOK = false
  }

  let notas;
  if (req.body.notas !== undefined && req.body.notas !== '') {
    notas = req.body.notas
  } else notas = ''

  if (totOK) {
    let solicitudActualitzada = {
      colectivo: colectivo,
      unidad: unidad,
      turno: turno,
      dia: dia,
      licencia: licencia,
      cubre: cubre,
      notas: notas
    }

    await crudSolicitudes.update(app.locals.id, solicitudActualitzada);

    res.redirect('/solicitudesPendientes')
  }

});



