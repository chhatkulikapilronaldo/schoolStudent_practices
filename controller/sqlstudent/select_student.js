(()=>{
    const select_student = require('../sql/readSelect')
    module.exports = async(req, res, next) => {
            const output2=await select_student();
            
                res.status(200).send(output2);
          
           
       
    }
})()