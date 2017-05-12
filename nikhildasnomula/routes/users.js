const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');
const Articles = require('../models/articles');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({
        success: false,
        msg: 'Failed to register user'
      });
    }else {
      res.json({
        success: true,
        msg: 'Successfully registered user'
      });
    }
  })
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    console.log('candidatePassword: ' + password);
    console.log('hashed password: ' + user.password);
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }

    });
  });
});

// PROFILE
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user:req.user});
});


// Move these two calls to a seperate articles routes file
router.get('/articles/calisthenics',(req,res,next) => {
  Articles.getArticleByTitle("Calisthenics", (err, article) => {
    if(err) throw err;
    res.json(article);
  });
});

router.get('/articles',(req,res,next) => {
  const category = req.query.category;
  Articles.getArticleByCategory(category, (err, article) => {
    if(err) throw err;
    res.json(article);
  });
});

module.exports = router;
