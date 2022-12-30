const database = require('../../models/userModel')
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
        }
    })
}

module.exports = {usersId}