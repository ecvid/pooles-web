import express from 'express';
import {isMaster} from "../../passport/config.mjs";
import {ANY} from "../../utils/ANY.mjs";
import AdmZip from 'adm-zip';
export const router = express. Router();

router.get('/', isMaster, async (req, res) => {

    res.render('master/master', {
        title: "GESTIÓN RRHH POOLES " + ANY
    })

})

router.post('/download', isMaster, async (req, res) => {

    try {

        const zip = new AdmZip();
        const outputFile = 'Databases.zip';
        zip.addLocalFolder('./databases');
        zip.writeZip(outputFile);

        res.download(outputFile)

    } catch (err) {
        console.log(err.message)
    }

})