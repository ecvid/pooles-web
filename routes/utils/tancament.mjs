import express from 'express';
import {isLoggedIn} from "../../passport/config.mjs";
export const router = express. Router();

router.get('/tancament', isLoggedIn, async (req, res) => {

    console.log('TANCAMENT');
    req.session.destroy();

})
