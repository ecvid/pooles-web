import express from 'express';
import { ANY } from "../utils/ANY.mjs";
import {app} from "../app.mjs";
export const router = express. Router();

/* GET home page. */
router.get('/', (req, res, next) => {

    //VARIABLES DE SESSIÓ per a determinar es colectiu i mes de treball
    req.session.colectiuTreball = undefined
    req.session.mesTreballDues = undefined
    req.session.mesTreballAes = undefined

    //VARIABLE DE SESSIÓ per a determinar s'id de s'element amb que estiguem treballant
    req.session.element = undefined

  switch (req.user.user) {
    case 'user':
        res.redirect('users')
        break;
   case 'admin':
        res.redirect('solicitudes')
        break;
   case 'master':
        res.redirect('master')
        break;
  }

    /*res.render('login', {
        layout: 'layouts/layoutLogin',
        title: "GESTIÓN RRHH POOLES " + ANY
    });*/
});
