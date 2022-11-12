import express from 'express';
import {isLoggedIn} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
export const router = express. Router();

router.get('/', isLoggedIn, (req, res) => {
  res.render('solicitudes/solicitudes', {
    title: "GESTIÓN RRHH POOLES " + ANY
  })
})

