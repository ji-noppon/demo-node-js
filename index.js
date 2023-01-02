const express = require('express')
const app = express()

const {router} = require('./routes/routing')    //module.export = {router}
const PORT = 3500

app.use(router)

app.listen(PORT,()=>{
    console.log('====== node start =======');
})

module.exports = app