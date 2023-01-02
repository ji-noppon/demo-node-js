const {getStatusOnFinish} = require('../../log/logger')
const database = require('../../models/userModel')  //module.export = connection  when init can set  const database 
const usersId = (req,res)=>{
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
            getStatusOnFinish(res.statusCode)
        }
    })
}

module.exports = {usersId}