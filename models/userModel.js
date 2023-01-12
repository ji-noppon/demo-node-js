require("dotenv").config()
const mysql = require('mysql');

let connection = mysql.createConnection({
    host        : process.env.HOST,
    database    : process.env.DATABASE,
    user        : process.env.USER,
    password    : process.env.PASSWORD
})

connection.connect( function(error){
    if(error){
        throw error;
    }else{
        console.log('===== connect to db success =====');
    }
})

module.exports =  connection