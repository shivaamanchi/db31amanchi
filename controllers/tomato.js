var tomato = require('../models/tomato'); 
 
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
exports.tomato_view_all_Page = async function (req, res) {
    try {
        let thetomato = await tomato.find();
        res.render('tomato', { title: 'tomato Search Results', results: thetomato });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific tomato.
exports.tomato_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await tomato.findById( req.params.id)
        res.send(result)
    } 
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};

 
// Handle tomato create on POST. 
exports.tomato_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new tomato(); 
    document.type = req.body.type; 
    document.expdate = req.body.expdate; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle tomato delete form on DELETE.  
exports.tomato_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await tomato.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle tomato update form on PUT. 
exports.tomato_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await tomato.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.type)  toUpdate.type = req.body.type; 
        if(req.body.expdate) toUpdate.expdate = req.body.expdate; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 

// Handle a show one view with id specified by query
exports.tomato_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await tomato.findById( req.query.id)
        res.render('tomatodetail', {
            title: 'tomato Detail', 
            toShow: result
        });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a se.
// No body, no in path parameter, no query.
// Does not need to be async
exports.tomato_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('tomatocreate', { title: 'tomato Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a tomato. 
// query provides the id 
exports.tomato_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await tomato.findById(req.query.id) 
        res.render('tomatoupdate', { title: 'tomato Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.tomato_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await tomato.findById(req.query.id) 
        res.render('tomatodelete', { title: 'tomato Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};