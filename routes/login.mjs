import express from 'express';
import passport from "passport";
import { ANY } from "../utils/ANY.mjs";
export const router = express. Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('login', {
        layout: 'layouts/layoutLogin',
        title: "GESTIÓN RRHH POOLES " + ANY
    });
});

router.post('/login', passport.authenticate('login', {
    failureRedirect: '/',
    successRedirect: '/solicitudes'
}))