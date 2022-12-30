const database = require('../../models/userModel')
const users = (req,res)=>{
    var query = "select * from customers"
    database.query(query,(error,data)=>{
        if(error){
            throw error;
        }else{
            /* console.log(data); */
            res.json(data)
        }
    })
   
}
module.exports = {
    users
}