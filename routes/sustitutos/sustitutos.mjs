import express from 'express';
import {isAdmin} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
export const router = express. Router();
import * as crud from '../../models/sustitutos/crud.mjs'

router.get('/', isAdmin, async (req, res) => {

    let sustitutos = await crud.getAll()

    res.render('sustitutos/sustitutos', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        sustitutos: sustitutos
    })
})

router.get('/eliminar', isAdmin, async (req, res) => {

    res.render('sustitutos/eliminar', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        sustituto: req.query.sustituto
    })
})

router.post('/eliminar', isAdmin, async (req, res) => {

    await crud.remove(req.body.sustituto)

    res.redirect('/sustitutos')
})

router.get('/anyadir', isAdmin, (req, res) => {

    res.render('sustitutos/anyadir', {
        title: "GESTIÓN RRHH POOLES " + ANY
    })
})

router.post('/anyadir', isAdmin, async (req, res) => {

    await crud.insert(req.body.nouSubstitut, req.body.colectivo)

    res.redirect('/sustitutos')
})

router.get('/actualizar', isAdmin, (req, res) => {

    res.render('sustitutos/actualizar', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        sustituto: req.query.sustituto
    })
})

router.post('/actualizar', isAdmin, async (req, res) => {

    await crud.update(req.body.sustituto, req.body.nuevoSustituto)

    res.redirect('/sustitutos')
})

