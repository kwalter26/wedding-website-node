/**
 * Created by kyle on 12/20/15.
 */





var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/new',function(req,res){
    console.log('here')
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

module.exports = router;



