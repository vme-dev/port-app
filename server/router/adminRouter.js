var express = require('express');
var Mail = require('../models/Mail.js');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');

var router = express.Router();

function adminRouter (app) {

app.use(
    session({
      secret: 'hghtyNN23h',
      store: new FileStore(),
      cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      },
      resave: false,
      saveUninitialized: false,
    })
  );

require('../config-passport');
app.use(passport.initialize());
app.use(passport.session());

const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      return res.redirect('/');
    }
  };
  
router.post('/login', (req, res, next) => {
    passport.authenticate('local', function(err, user) {
      if (err) {
        return next(err);
      }
      console.log(req.params);
      if (!user) {
        return res.status(400).send({
          error:'GENERIC',
          description:'Wrong auth'
        });
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.redirect('/');
      });
    })(req, res, next);
  });
  
router.get('/admin/name', auth, (req, res) => {
  
    const postData = {
      "name":'req.body.name',
    };
     res.status(201).json(postData);
  
  });
router.get('/get-mail', auth, (req, res) => {
    Mail.find({}).then((posts) => {
          res.status(200).json(posts);
      })
  });
  
router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });
app.use('/auth',router);

}

module.exports = adminRouter;