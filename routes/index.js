//var express = require('express');
//var router = express.Router();
var down = false;

var nodemailer = require('nodemailer');


module.exports = function(app,passport){

  app.get('/down',function(req,res,next){
    res.render('down',{title:'Down For Maintenance'});
  })

  app.get('/login',isDown,function(req,res,next){
    res.render('login',{title:'Join the Adventure',message: req.flash('loginMessage')});
  });

  app.post('/login',isDown, passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

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

  //app.get('/signup',function(req,res,next){
  //  res.render('signup', { message: req.flash('signupMessage') });
  //});

  //app.post('/signup', passport.authenticate('local-signup', {
  //  successRedirect : '/', // redirect to the secure profile section
  //  failureRedirect : '/signup', // redirect back to the signup page if there is an error
  //  failureFlash : true // allow flash messages
  //}));

  app.get('/*',isDown,isLoggedIn,function(req,res,next){
    res.render('index',{title:'Katie and Kyle Walk Down the Aisle'});
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