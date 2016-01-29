/**
 * Created by Kyle Walter on 1/28/2016.
 */


var express = require('express');
var router = express.Router();

router.post('/new',function(req,res){
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

module.exports = router;


