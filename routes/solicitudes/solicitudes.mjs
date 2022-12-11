import express from 'express';
import {isLoggedIn} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
import {app} from "../../app.mjs";
export const router = express. Router();

router.get('/', isLoggedIn, (req, res) => {
  if (app.locals.levelAccess === 'master') {
    res.render('master/master', {
      title: "GESTIÓN RRHH POOLES " + ANY
    })
  } else {
    res.render('solicitudes/solicitudes', {
      title: "GESTIÓN RRHH POOLES " + ANY
    })
  }
})

