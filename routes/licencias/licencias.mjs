import express from 'express';
import {isAdmin} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
export const router = express. Router();
import * as crud from '../../models/licencias/crud.mjs'

router.get('/', isAdmin, async (req, res) => {

    let licencias = await crud.getAll()

    res.render('licencias/licencias', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        licencias: licencias
    })
})

router.get('/eliminar', isAdmin, async (req, res) => {

    res.render('licencias/eliminar', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        licencia: req.query.licencia
    })
})

router.post('/eliminar', isAdmin, async (req, res) => {

    await crud.remove(req.body.licencia)

    res.redirect('/licencias')
})

router.get('/anyadir', isAdmin, (req, res) => {

    res.render('licencias/anyadir', {
        title: "GESTIÓN RRHH POOLES " + ANY
    })
})

router.post('/anyadir', isAdmin, async (req, res) => {

    await crud.insert(req.body.licencia)

    res.redirect('/licencias')
})

router.get('/actualizar', isAdmin, (req, res) => {

    res.render('licencias/actualizar', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        licencia: req.query.licencia
    })
})

router.post('/actualizar', isAdmin, async (req, res) => {

    await crud.update(req.body.licencia, req.body.nuevaLicencia)

    res.redirect('/licencias')
})

