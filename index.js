const express = require('express')
const database = require('./models/userModel')
const app = express()

const PORT = 3500
const {users} = require('./controller/users/users')
const {usersId} = require('./controller/users/usersId')

app.get('/',(req,res)=>{
   res.send("welcome to cookie shop") 
})

app.get('/users',users)

app.get('/users/:id',usersId)

app.all('*',(req,res)=>{
    res.status(404).send('Not Found')
})

app.listen(PORT,()=>{
    console.log('====== node start =======');
})

module.exports = app