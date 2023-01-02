const { getStatusOnFinish, logger } = require('../../log/logger');
const database = require('../../models/userModel')  //module.export = connection  when init can set  const database 
const login = (req,res)=>{
    var query = `select * from users where username = 'test' `
    database.query(query,(error,data)=>{
        if(error){
            throw error;
        }else{
            /* console.log(data); */
            if(data[0]){
                res.json(data)
            } else{
                console.log('no data');
                res.status(401).send('fail authen')
            }   
            /* res.json(data) */
            getStatusOnFinish(res.statusCode)
        }
    })
   
}
module.exports = {
    login
}