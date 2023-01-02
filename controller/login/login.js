const { getStatusOnFinish, logger } = require('../../log/logger');
const database = require('../../models/userModel')  //module.export = connection  when init can set  const database 
const login = (req,res)=>{
    var query = `select * from customers where role_id = 1 `
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
module.exports = {
    login
}