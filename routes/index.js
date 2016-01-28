//var express = require('express');
//var router = express.Router();
var down = false;

var nodemailer = require('nodemailer');
var Data = require('../models/data');


module.exports = function(app,passport){

  //app.get('/down',function()
  //  res.render('down',{title:'Down For Maintenance'});
  //});

  app.get('/login',isDown,function(req,res,next){
    res.render('login',{title:'Join the Adventure',message: req.flash('loginMessage')});
  });

  app.post('/login',isDown, recordHit, passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  app.get('/adminlogin',function(req,res,next){
    res.render('adminlogin',{title:'Join the Adventure', message: req.flash('loginMessage')});
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.post('/music',isDown,isLoggedIn,function(req,res){
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'kkwedding26@gmail.com', // Your email id
        pass: 'Lola2008' // Your password
      }
    });

    var mailOptions = {
      from: 'kkwedding26@gmail.com', // sender address
      to: 'kkwedding26@gmail.com', // list of receivers
      subject: 'Song Request from ' + req.body.name, // Subject line
      text: 'Song Request One: ' + req.body.requestOne + '\nSong Request Two: ' + req.body.requestTwo + '\nSong Request Three: ' + req.body.requestThree //, // plaintext body
      // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions,function(error,info){
      if(error){
        console.log(error);
        res.redirect('/');
      }else{
        console.log('Message sent: ' + info.response);
        res.redirect('/');
      };
    })
  });
  app.post('/contact',isDown,isLoggedIn,function(req,res){
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'kkwedding26@gmail.com', // Your email id
        pass: 'Lola2008' // Your password
      }
    });

    var mailOptions = {
      from: req.body.email, // sender address
      to: 'kkwedding26@gmail.com', // list of receivers
      subject: 'Question from ' + req.body.name, // Subject line
      text: 'Email from: ' + req.body.email + '\n\n' + req.body.question //, // plaintext body
      // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions,function(error,info){
      if(error){
        console.log(error);
        res.redirect('/');
      }else{
        console.log('Message sent: ' + info.response);
        res.redirect('/');
      };
    })
  });

  app.get('/*',isDown,isLoggedIn,function(req,res,next){
    var user = req.user.local;
    if(user.admin){
    Data.findOne({'name' : 'main'},function(err, data) {
      if (err)
        return done(err);
      if (data) {
        res.render('index', {
          title: 'Katie and Kyle Walk Down the Aisle',
          hits: data.hits,
          down: data.down,
          admin: user.admin
        });
      }
    });
    }else{
        res.render('index',{
          title: 'Katie and Kyle Walk Down the Aisle',
          admin: req.session.admin
        });
    }
  });

}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
  res.redirect('/login');
}
function isDown(req, res, next){
  if(!down){
    return next();
  }
  res.redirect('/down')
}
function recordHit(req,res,next){
  Data.findOne({'name' : 'main'},function(err, data){
    if (err)
      return done(err);

    if(!data){
      var newMainData = new Data();

      newMainData.name = 'main';
      newMainData.hits = 1;
      newMainData.down = false;

      newMainData.save(function(err){
        if(err)
          throw err;
        console.log('main data created');
      })
    }else{
      data.hits += 1;
      data.save(function(err){
        if(err)
          throw err;
        console.log('Hit Counted');
      })
    }
    return next();
  });
}
