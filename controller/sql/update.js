// (()=>{
//     module.exports=async(requestObject)=>{
//         const helper = require("../../common/index")
//        const output=await helper.mysqlHelper.query("UPDATE students SET id='"+id+"',firstName='"+firstName+"',lastName='"+lastName+"',email='"+email+"' WHERE id ="+id);
//        // const output=await helper.mysqlHelper.query(`upadte students set "id=`${id}''`)
//         return output;
//     }
// })()

//const { uuidv4 } = require("sequelize");
"use strict";
(()=>{
    const helper = require("../../common/index")
    const date  = new Date().getTime()
    module.exports = async(call) => {
       // uuid='${uuidv4()}',
       
      try {
        let sqlquery = `UPDATE students SET firstName='${call.firstName}',lastName='${call.lastName}',email='${call.email}',updatedAt='${date}',Password='${call.Password}' WHERE uuid='${call.uuid}'`; 
       let result = await helper.mysqlHelper.query(sqlquery); 

       if(result[0].affectedRows>0){
        return true
    }
    else{
        return false
    }
          
         } catch (error) {
            console.log(eror)
        
      } 
       
    };
})()