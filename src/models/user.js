

const mysql = require('mysql');

//configurando la conexión a la db
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678', //se coloca la contraseña de la db
    database: 'userlogin'
});

let userModel = {};

userModel.getUsers = (callback) => {
    if(connection){
        //Se le escribe la consulta a la base de datos
        connection.query('SELECT email, password FROM users order by id',
            (err,rows) =>{
                if(err){
                    console.log(err);
                } else {
                    callback(null, rows);
                }
            }); 
    }
};

userModel.insertUser = (userData, callback) => {
    if(connection){
        connection.query('Insert into users set ?', userData, 
        (err, res)=>{
            if(err){
                console.log(err);
            } else {
                callback(null, {
                    'insertId': res.insertId,
                });
            }
        });
    }
}
module.exports = userModel;