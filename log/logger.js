var log = ''

const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url

    const date = new Date()
    let dateLocal = date.toLocaleString()
    
    /* console.log(method , url , dateLocal); */
    log = `start = status ${method} ${url} ${dateLocal}`
    /* console.log(log); */
    next()
}
const getStatusOnFinish = (statusCode) =>{
    const dateEnd = new Date()
    let dateLocalEnd = dateEnd.toLocaleString()
    
    /* console.log('status',statusCode,dateLocalEnd); */
    log += ` end = statusCode ${statusCode} ${dateLocalEnd}`   
    console.log(log);

}
module.exports = {
    logger,
    getStatusOnFinish
}