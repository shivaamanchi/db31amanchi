var express = require('express'); 
const tomato_controlers= require('../controllers/tomato'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', tomato_controlers.tomato_view_all_Page ); 
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('tomato', { title: 'Search Results Tomato' });
});

module.exports = router;