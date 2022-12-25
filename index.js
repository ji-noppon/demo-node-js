const express = require('express')
const database = require('./models/userModel')
const app = express()

const PORT = 3500

app.get('/',(req,res)=>{
    
   res.send("welcome to cookie shop")
   
})

app.get('/users',(req,res)=>{
    var query = "select * from customers"
    database.query(query,(error,data)=>{
        if(error){
            throw error;
        }else{
            /* console.log(data); */
            res.json(data)
        }
    })
   
})

app.get('/users/:id',(req,res)=>{
    var id = req.params.id
    console.log(id);
    var query = `select * from customers    \
                 where customer_id = ${id} `
    database.query(query,(error,data)=>{
        if(error){
            throw error;
        }else{
            /* console.log(data); */
            res.json(data)
        }
    })
   
})

app.listen(PORT,()=>{
    console.log('====== node start =======');
})

module.exports = app