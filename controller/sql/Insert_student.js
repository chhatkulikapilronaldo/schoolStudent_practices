(()=>{
    module.exports=async(call)=>{
        const helper = require("../../common/index");
       const date  = new Date().getTime()
       const { v4: uuidv4 } = require('uuid');

    
// const inserObj =
// {
//     uuid:uuidv4(),
//     firstName: call.firstName,
//     lastName: call.lastName,
//     email:call.email, 
//     createdAt: new Date().getTime()
    
// }
// const input = await helper.mysqlHelper.query(`INSERT into students ? `,[inserObj])
const output = await helper.mysqlHelper.query(`INSERT INTO students (uuid,firstName,lastName,email,createdAt) VALUES   ('${uuidv4()}','${call.firstName }','${call.lastName}','${call.email}',${date})`)
        
      
      if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
    }
})()