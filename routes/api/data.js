/**
 * Created by Kyle Walter on 1/28/2016.
 */

var Data = require('../../models/data');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    Data.findOne({'name': 'main'}, function (err, data) {
        if (err)
            return done(err);
        res.json({
            hits: data.hits,
            down: data.down,
        });
    });
});

router.post('/update',function(req,res,next){
   Data.findOne({name:'main'},function(err,data){
       if(err)
        return done(err);
       if(data){
           data.hits = data.hits;
           data.down = !data.down;
           data.save();
       }
   })


});

module.exports =  router;



