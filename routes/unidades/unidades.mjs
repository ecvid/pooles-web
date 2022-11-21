import express from 'express';
import {isLoggedIn} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
export const router = express. Router();
import * as crud from '../../models/unidades/crud.mjs'

router.get('/', isLoggedIn, async (req, res) => {

    let unidades = await crud.getAll()

    res.render('unidades/unidades', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        unidades: unidades
    })
})

router.get('/eliminar', isLoggedIn, async (req, res) => {

    res.render('unidades/eliminar', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        unidad: req.query.unidad
    })
})

router.post('/eliminar', isLoggedIn, async (req, res) => {

    await crud.remove(req.body.unidad)

    res.redirect('/unidades')
})

router.get('/anyadir', isLoggedIn, (req, res) => {

    res.render('unidades/anyadir', {
        title: "GESTIÓN RRHH POOLES " + ANY
    })
})

router.post('/anyadir', isLoggedIn, async (req, res) => {

    await crud.insert(req.body.unidad)

    res.redirect('/unidades')
})

router.get('/actualizar', isLoggedIn, (req, res) => {

    res.render('unidades/actualizar', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        unidad: req.query.unidad
    })
})

router.post('/actualizar', isLoggedIn, async (req, res) => {

    await crud.update(req.body.unidad, req.body.nuevaUnidad)

    res.redirect('/unidades')
})

