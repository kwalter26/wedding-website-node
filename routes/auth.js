/**
 * Created by Kyle Walter on 2/27/2016.
 */
module.exports = function(passport){

    var express = require('express');
    var router  = express.Router();

    var Data = require('../models/data');

    router.get('/login', isDown, function (req, res, next) {
        res.render('auth/login', {title: 'Join the Adventure', message: req.flash('loginMessage')});
    });

    router.post('/login', isDown, recordHit, passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/auth/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    router.get('/adminlogin', function (req, res, next) {
        res.render('auth/adminlogin', {title: 'Join the Adventure', message: req.flash('loginMessage')});
    });

    router.post('/adminlogin', passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/auth/adminlogin', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/auth/login');
    });

    function recordHit(req, res, next) {
        Data.findOne({'name': 'main'}, function (err, data) {
            if (err)
                return done(err);
            if (data) {
                data.hits += 1;
                data.save(function (err) {
                    if (err)
                        throw err;
                    console.log('Hit Counted');
                })
            }
            return next();
        });
    }
    function isDown(req, res, next) {
        var admin = false;
        if(req.hasOwnProperty('user'))
            var admin = req.user.local.admin;

        Data.findOne({'name': 'main'}, function (err, data) {
            if (err)
                return done(err);
            if (data) {
                if(data.down && !admin){
                    res.redirect('/down')
                }
            }
            next();
        });
    }

    return router;
};