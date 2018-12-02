const User = require('../models/user');
module.exports = function(app){
    app.get('/users', (req, res) => {
        User.getUsers((err, data) => {
            res.json(data);
        });
    });

    app.post('/users', (req, res) => {
        const userData = {
            id: null,
            email: req.body.email,
            password: req.body.password,

        }

        User.insertUser(userData, (err, data) =>{
            if(data && data.insertId){
                res.json({
                    success: true,
                    msg: "Usuario Insertado",
                    data: data
                })
            } else {
                res.status(500).json({
                    success: false,
                    msg: "Error inesperado"
                })
            }
        });
    });
    
  
}