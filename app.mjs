import express from 'express';
import { default as ejs } from 'ejs';
import ejsLayouts from 'express-ejs-layouts'
import * as path from 'path';
import { default as logger } from 'morgan';
import { default as cookieParser } from 'cookie-parser';
import { default as bodyParser } from 'body-parser';
import * as http from 'http';
import { approotdir } from './approotdir.mjs';
const __dirname = approotdir;
import {
  normalizePort, onError, onListening, handle404, basicErrorHandler
} from './appsupport.mjs';

import { router as loginRouter } from './routes/login.mjs';
import { router as solicitudesRouter } from './routes/solicitudes/solicitudes.mjs'
import { router as licenciasRouter } from './routes/licencias/licencias.mjs'
import { router as unidadesRouter } from './routes/unidades/unidades.mjs'
import { router as sustitutosRouter } from './routes/sustitutos/sustitutos.mjs'
import { router as masterRouter } from './routes/master/master.mjs'

export const app = express();

console.log(process.env.NODE_ENV)

//variables globals per a determinar es nivell d'accés
app.locals.levelAccess = null
app.locals.isAlreadyLogged = false

//variables globals per a determinar es colectiu i mes de treballç
app.locals.colectiuTreball = null
app.locals.mesTreballDues = null
app.locals.mesTreballAes = null

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(ejsLayouts)
app.set('layout', 'layouts/layout')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.json())

// Configuració de Passport
import './passport/config.mjs';
import passport from 'passport';

import expressSession from 'express-session';
import connectRedis from 'connect-redis'
import Redis from 'ioredis'
import {maxAge} from "express-session/session/cookie.js";

if (process.env.NODE_ENV !== 'production') {
  app.use(expressSession({
    secret: 'dnfpaw9fim#~€s98deumr¬||fra4wjf9em884nuf849',
    resave: false,
    saveUninitialized: true
  }));

} else if (process.env.NODE_ENV === 'production') {

  const redisStore = connectRedis(expressSession)
  const redisClient = Redis.createClient(6379, 'redis://red-cfhmoo9gp3jh03m8o4l0')

  app.use(expressSession({
    store: new redisStore({client: redisClient}),
    secret: 'dnfpaw9fim#~€s98deumr¬||fra4wjf9em884nuf849',
    resave: false,
    saveUninitialized: true,
    maxAge: Date.now() + (1000 * 60 * 60)
  }));
}

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
//app.use('/assets/vendor/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
//app.use('/assets/vendor/jquery', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
//app.use('/assets/vendor/popper.js', express.static(path.join(__dirname, 'node_modules', 'popper.js', 'dist', 'umd')));

// Router function lists
app.use('/', loginRouter);
app.use('/solicitudes', solicitudesRouter);
app.use('/licencias', licenciasRouter);
app.use('/unidades', unidadesRouter);
app.use('/sustitutos', sustitutosRouter);
app.use('/master', masterRouter);

// error handles
// catch 404 and forward to error handler
app.use(handle404);
app.use(basicErrorHandler);

export const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

export const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);