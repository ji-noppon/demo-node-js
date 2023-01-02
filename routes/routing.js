const {users} = require('../controller/users/users')
const {usersId} = require('../controller/users/usersId')
const {login} = require('../controller/login/login')

const {Router} = require('express')   // import
const {logger,getStatusOnFinish} = require('../log/logger')

const router = Router()     // Initialization

router.use(logger)

router.get('/',(req,res)=>{
    res.send("welcome to cookie shop") 
    getStatusOnFinish(res.statusCode)
 })
 
 router.get('/users',users)
 
 router.get('/users/:id',usersId)
 
router.get('/login',login)

 router.all('*',(req,res)=>{
     res.status(404).send('Not Found')
     getStatusOnFinish(res.statusCode)
 })

module.exports = {router}