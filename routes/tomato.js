var express = require("express");
const tomato_controlers= require('../controllers/tomato'); 
var router = express.Router();

/* GET home page. */
router.get('/', tomato_controlers.tomato_view_all_Page);

/* GET detail tomato page */ 
router.get('/detail', tomato_controlers.tomato_view_one_Page); 
 /* GET create tomato page */ 
router.get('/create', tomato_controlers.tomato_create_Page);

/* GET create update page */ 
router.get('/update', tomato_controlers.tomato_update_Page); 

/* GET create tomato page */ 
router.get('/delete', tomato_controlers.tomato_delete_Page); 

module.exports = router;