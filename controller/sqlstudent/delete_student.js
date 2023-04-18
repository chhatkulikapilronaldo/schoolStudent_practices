"use strict";
(()=>{
    const delete_student = require('../sql/deletesoft')
    module.exports = async(req, res, next) => {
        try {
            const output2=await delete_student(req.params);
            
            res.status(200).send(output2);
            res.send("delete Succesful");

            
        } catch (error) {
            console.log(error)
           // res.status(400).send("delete unsuccesful")
        }
    }   
})()