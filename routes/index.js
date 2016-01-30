



module.exports = function(app,passport) {

  var passport = require('passport');
  var Data = require('../models/data');

  var music = require('./api/music');
  var contact = require('./api/contact');
  var data = require('./api/data');


  app.use('/api/music',music);
  app.use('/api/contact',contact);
  app.use('/api/data',data);



  app.get('/login', isDown, function (req, res, next) {
    res.render('login', {title: 'Join the Adventure', message: req.flash('loginMessage')});
  });

  app.post('/login', isDown, recordHit, passport.authenticate('local-login', {
    successRedirect: '/home', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  app.get('/adminlogin', function (req, res, next) {
    res.render('adminlogin', {title: 'Join the Adventure', message: req.flash('loginMessage')});
  });

  app.post('/adminlogin', passport.authenticate('local-login', {
    successRedirect: '/home', // redirect to the secure profile section
    failureRedirect: '/adminlogin', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/home', isDown, isLoggedIn, function (req, res, next) {
    res.render('index', {
      title: 'Katie and Kyle Walk Down the Aisle',
      admin: req.user.local.admin
    });
  });

  app.get('/down',function(req,res,next){
    res.render('down');
  });

  app.get('/*', isDown, isLoggedIn, function(req,res,next){
    res.redirect('/home')
  });



  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();
    // if they aren't redirect them to the home page
    res.redirect('/login');
  }
  function isDown(req, res, next) {
    var admin = false;
    console.log(req.session);
    if(req.hasOwnProperty('user'))
      admin = true;

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
}
