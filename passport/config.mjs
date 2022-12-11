import passport from 'passport'
import passportLocal from 'passport-local'
import {app} from "../app.mjs";
const LocalStrategy = passportLocal.Strategy

// setup strategy LocalStrategy
passport.use('login', new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password'
},
    (user, password, done) => {
        if(user === 'user' && password === '123') {
            app.locals.isAlreadyLogged = true;
            return done(null, {user: 'user'})
        } else {
            if(user === 'admin' && password === '456') {
                app.locals.isAlreadyLogged = true;
                return done(null, {user: 'admin'})
            } else {
                if(user === 'master' && password === '789') {
                    app.locals.isAlreadyLogged = true;
                    return done(null, {user: 'master'})
                } else {
                    return done(null, false)
                }
            }
        }
    }
))

passport.serializeUser((user, done) => {
    if (user.user === 'user') {
        app.locals.levelAccess = 'user';
    }
    if (user.user === 'admin') {
        app.locals.levelAccess = 'admin';
    }
    if (user.user === 'master') {
        app.locals.levelAccess = 'master';
    }
    done(null, user.user);
})

passport.deserializeUser((user, done) => {
    done(null, {user: user});
})

export function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } //else if (!app.locals.isAlreadyLogged) return res.redirect('/login');
    else return res.redirect('/')
}

export function isAdmin(req, res, next) {
    if (req.isAuthenticated() && app.locals.levelAccess === 'admin') {
        return next();
    } //else if (!app.locals.isAlreadyLogged) return res.redirect('/login');
    else return res.redirect('/')
}

export function isMaster(req, res, next) {
    if (req.isAuthenticated() && app.locals.levelAccess === 'master') {
        return next();
    } //else if (!app.locals.isAlreadyLogged) return res.redirect('/login');
    else return res.redirect('/')
}