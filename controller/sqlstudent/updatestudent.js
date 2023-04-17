
(()=>{
    const update_student = require('../sql/update')
    module.exports = async(req, res, next) => {
        const obj ={
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            uuid: req.params.uuid
        }
            const output2=await update_student(obj);
            
                res.status(200).send(output2); 
                res.send("update Succesful")
          
           
       
    }
})()