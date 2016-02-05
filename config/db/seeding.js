/**
 * Created by Kyle Walter on 1/27/2016.
 */

    console.log('Seeding:       Seeding Started');

// Load Models
var User = require('../../models/user');
var Data = require('../../models/data');
var Music = require('../../models/music');

// Add guest user if not there
User.findOne({ 'local.username' :  'Guest' }, function(err, user){
    if (err)
        return done(err);
    if(!user){
        var newUser = new User();
        newUser.local.username = 'Guest';
        newUser.local.password = newUser.generateHash('nashville');
        newUser.local.admin = false;
        newUser.save(function(err) {
            if (err) {
                throw err;
            }else{
                console.log('Seeding:       Guest user added')
            }
        });
    }else{
        console.log('Seeding:       Guest user already there');
    }
});

// Add admin user if not there
User.findOne({ 'local.username' :  'Admin' }, function(err, user){
    if (err)
        return done(err);
    if(!user){
        var newUser = new User();
        newUser.local.username = 'Admin';
        newUser.local.password = newUser.generateHash('General Jackson');
        newUser.local.admin = true;
        newUser.save(function(err) {
            if (err)
                throw err;
            else
                console.log('Seeding:       Admin user added')
        });
    }else{
        console.log('Seeding:       Admin user already there')
    }
});

// Add main data
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
            else
                console.log('Seeding:       Main data created');
        })
    }else{
        console.log('Seeding:       Main data already there')
    }
});