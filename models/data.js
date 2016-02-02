/**
 * Created by Kyle Walter on 1/26/2016.
 */
var mongoose = require('mongoose');

var dataSchema  = mongoose.Schema({
    name        : String,
    hits        : Number,
    down        : Boolean,
});

module.exports = mongoose.model('Data', dataSchema);
