const mysql = require('mysql');

let connection = mysql.createConnection({
    host : 'localhost',
    database : 'cookieshop',
    user : 'root',
    password : ''
})

connection.connect( function(error){
    if(error){
        throw error;
    }else{
        console.log('===== connect to db success =====');
    }
})

module.exports =  connection