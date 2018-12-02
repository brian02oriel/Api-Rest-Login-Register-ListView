const mysql = require('mysql');

//configurando la conexión a la db
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678', //se coloca la contraseña de la db
    database: 'userlogin'
});

let listModel = {};

listModel.getList = (callback) => {
    if(connection){
        //Se le escribe la consulta a la base de datos
        connection.query('SELECT optionName FROM lvoptions order by id',
            (err,rows) =>{
                if(err){
                    console.log(err);
                } else {
                    callback(null, rows);
                }
            }); 
    }
};

module.exports = listModel;

