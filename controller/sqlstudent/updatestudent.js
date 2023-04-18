"use strict";
(()=>{
    const update_student = require('../sql/update')
    module.exports = async(req, res, next) => {
        try {
            const obj ={
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                uuid: req.params.uuid,
                Password: btoa(req.params.Password)  //used btoa for encodes  and atob used for decodes 
            }
                const output2=await update_student(obj);

                     res.send("update Succesful")
                    res.status(200).send(output2); 
                   // res.send("update Succesful")
        } catch (error) {
           // res.status(400).send("not to update")
            console.log(error)
            
        }
      
  };
})()