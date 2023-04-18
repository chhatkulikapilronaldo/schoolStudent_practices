"use strict";
(()=>{
    module.exports=async(call)=>{
        const helper = require("../../common/index");
       const date  = new Date().getTime()
       const { v4: uuidv4 } = require('uuid');
       try{ 
// const inserObj =
// {
//     uuid:uuidv4(),
//     firstName: call.firstName,
//     lastName: call.lastName,
//     email:call.email, 
//     createdAt: new Date().getTime()
    
// }
// const input = await helper.mysqlHelper.query(`INSERT into students ? `,[inserObj])
let querySring= `INSERT INTO students (uuid,firstName,lastName,email,createdAt,Password) VALUES   ('${uuidv4()}','${call.firstName }','${call.lastName}','${call.email}',${date},'${call.Password}')`
const output = await helper.mysqlHelper.query(querySring)
        
      if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
        } catch (error) {
            console.log(error)
        }
    };
})()