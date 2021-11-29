var express = require('express');
const tomato_controlers= require('../controllers/tomato');
var router = express.Router();

/* GET tomato */
router.get('/', tomato_controlers.tomato_view_all_Page); 
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('tomato', { title: 'Search Results tomato' });
});

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}

/* GET create tomato page */ 
router.get('/create',secured, tomato_controlers.tomato_create_Page);

/* GET update tomato page */ 
router.get('/update',secured, tomato_controlers.tomato_update_Page);

/* GET delete tomato page */ 
router.get('/delete',secured, tomato_controlers.tomato_delete_Page);

module.exports = router;