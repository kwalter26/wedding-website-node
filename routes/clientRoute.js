/**
 * Created by Kyle Walter on 2/27/2016.
 */

var express = require('express');
var router = express.Router();

router.get('/partials/:name', function (req, res){
    var name = req.params.name;
    console.log('Partial attempted');
    res.render('./partials/' + name);
});

module.exports = router;