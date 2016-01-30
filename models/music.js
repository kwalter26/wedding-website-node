/**
 * Created by kyle on 12/20/15.
 */
var mongoose = require('mongoose');

var musicSchema   = new mongoose.Schema({
    name: String,
    request: String
});

module.exports = mongoose.model('Music', musicSchema);