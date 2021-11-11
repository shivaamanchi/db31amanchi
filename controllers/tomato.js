var tomato = require('../models/tomato'); 
 
// List of all Costumes 
exports.tomato_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: tomato list'); 
}; 
 
// for a specific Costume. 
exports.tomato_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: tomato detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.tomato_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: tomato create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.tomato_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tomato delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.tomato_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: tomato update PUT' + req.params.id); 
};