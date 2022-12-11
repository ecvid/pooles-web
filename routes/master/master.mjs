import express from 'express';
import {isMaster} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
export const router = express. Router();

router.get('/', isMaster, async (req, res) => {

    res.render('master/master', {
        title: "GESTIÓN RRHH POOLES " + ANY
    })
})