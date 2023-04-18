"use strict";
//soft delete
(()=>{
    const helper = require("../../common/index")
    module.exports = async(req, res, next) => {
       try {
        let sqlQuery = `Update students set is_delete=1 WHERE uuid='${req.uuid}'`; //flag ko concept 1 or 0
       let result = await helper.mysqlHelper.query(sqlQuery); 
       if(result[0].affectedRows>0)
       {
         return true;
        
       }
       } catch (error) {
        console.log(error)
       }
       
    };
})()
// delete date
// (()=>{
//     const helper = require("../../common/index")
//     module.exports = async(req, res, next) => {
//        let sqlQuery = `delete from students WHERE uuid='${req.uuid}'`; //delete through uuid 
//        let result = await helper.mysqlHelper.query(sqlQuery); 
//        if(result[0].affectedRows>0)
//        {
//          return res.send("Successfully deleted")
        
//        }
      
           
       
//     }
// })()