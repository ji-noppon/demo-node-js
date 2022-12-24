const express = require('express')

const app = express()

const PORT = 3500

app.get('/',(req,res)=>{
    res.json([
        {
            'name':'kiyoshi',
            'lastname':'numpa'
        },
        {
            'name':'Gymolia',
            'lastname':'kasiya'
        }
    ]
           
    )
})

app.listen(PORT,()=>{
    console.log('====== node start =======');
})

module.exports = app