/**
 * Created by kyle on 12/20/15.
 */





var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var Music = require('../../models/music')

router.post('/new',function(req,res){

    var message = '';

    req.body.request.forEach(function(request,index){
        var newMusic = new Music();
        newMusic.name = req.body.name;
        newMusic.request = request;
        message += ('Song Request ' + index + ': '+request + '\n');
        newMusic.save(function(err){
            if(err)
                throw err;
            else
                console.log('Music:         Request saved')
        })
    });


    //var transporter = nodemailer.createTransport({
    //    service: 'Gmail',
    //    auth: {
    //        user: 'kkwedding26@gmail.com', // Your email id
    //        pass: 'Lola2008' // Your password
    //    }
    //});
    //
    //var mailOptions = {
    //    from: 'kkwedding26@gmail.com', // sender address
    //    to: 'kkwedding26@gmail.com', // list of receivers
    //    subject: 'Song Request from ' + req.body.name, // Subject line
    //    text: message
    //    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    //};
    //
    //transporter.sendMail(mailOptions,function(error,info){
    //    if(error){
    //        console.log(error);
    //        res.redirect('/home');
    //    }else{
    //        console.log('Message sent: ' + info.response);
    //        res.redirect('/home');
    //    };
    //})
});

router.get('/',function(req,res,next){
   Music.find({},function(err, music){
        if(err)
            return err;
        if(music){
            res.json(music);
        }
    });
});

module.exports = router;



