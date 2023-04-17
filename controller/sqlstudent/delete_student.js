(()=>{
    const delete_student = require('../sql/deletesoft')
    module.exports = async(req, res, next) => {
            const output2=await delete_student(req.params);
            
                res.status(200).send(output2);
                res.send("delete Succesful");
          
           
       
    }
})()