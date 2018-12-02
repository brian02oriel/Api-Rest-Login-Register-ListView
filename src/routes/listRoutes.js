const List = require('../models/list');
module.exports = function(app){
    app.get('/list', (req, res) => {
        List.getList((err, data) => {
            res.json(data);
        });
    });    
  
}