"use strict";
(()=>{
    module.exports=async()=>{
      try {
        const helper = require("../../common/index")
        //const output=await helper.mysqlHelper.query("Select * from students where id="+search);
       const output=await helper.mysqlHelper.query("Select * from students where is_delete=0");
        return output;
    }
       catch (error) {
        console.log(error)
      }
    };    
})()