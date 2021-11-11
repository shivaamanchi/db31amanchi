var tomato = require('../models/tomato'); 
 
// List of all tomato 
// List of all tomato 
exports.tomato_list = async function(req, res) { 
    try{ 
        thetomato = await tomato.find(); 
        res.send(thetomato); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.tomato_view_all_Page = async function(req, res) { 
    try{ 
        thetomato = await tomato.find(); 
        res.render('tomato', { title: 'tomato Search Results', results: thetomato }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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
