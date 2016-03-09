



module.exports = function(app,passport) {

  var Data = require('../models/data');

  var auth = require('./auth.js')(passport);
  var music = require('./api/music');
  var contact = require('./api/contact');
  var data = require('./api/data');

  app.use('/auth',auth);
  app.use('/api/music',music);
  app.use('/api/contact',contact);
  app.use('/api/data',data);


  app.get('/down',function(req,res,next){
    res.render('down');
  });

  app.get('/partial/:name', function (req, res){
    var name = req.params.name;
    console.log('Partial attempted');
    res.render('partials/' + name);
  });

  app.get('/*', isLoggedIn, function(req,res,next){
    res.render('index', {
      title: 'Katie and Kyle Walk Down the Aisle',
      admin: req.user.local.admin
    });
  });

  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();
    // if they aren't redirect them to the home page
    res.redirect('/auth/login');
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

}
