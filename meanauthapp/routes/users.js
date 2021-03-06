const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database.js');
const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, message: 'failed to register user'});
        } else {
            res.json({success: true, message: 'User registered.'})
        }
    })
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    
    console.log(req.body);

    console.log(username);
    console.log(password);

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, message: 'user not found'});
        }
    
    User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
            const token = jwt.sign(user, config.secret, {
                expiresIn: 604800 // 1 week
            });

            res.json({
                success:true,
                token: 'JWT ' + token,
                user: {
                    id: user._id,
                    name: user.name,
                    username: user.username,
                    email: user.email 
                }
            })
        } else {
            res.json({success: false, message: 'Wrong password'});
        }
    });
        
    });

   

});

// Profile
router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next) => {
    res.json({
        user: req.user
    });
});

router.get('/validate', (req, res, next) => {
    res.send('Validate');
});

module.exports = router;