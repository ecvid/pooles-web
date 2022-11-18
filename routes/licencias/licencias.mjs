import express from 'express';
import {isLoggedIn} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
export const router = express. Router();
import * as crud from '../../models/licencias/crud.mjs'

router.get('/', isLoggedIn, async (req, res) => {

    let licencias = await crud.getAll()

    res.render('licencias/licencias', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        licencias: licencias
    })
})

router.get('/eliminar', isLoggedIn, async (req, res) => {
    res.render('licencias/eliminar', {
        title: "GESTIÓN RRHH POOLES " + ANY,
        licencia: req.query.licencia
    })
})