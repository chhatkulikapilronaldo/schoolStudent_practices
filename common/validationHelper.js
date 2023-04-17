((hey)=>{
  let pattern = /@gmail.com/;
  hey.uservalidation = async(requestObject) =>{
      if (requestObject.firstName == ""||requestObject.lastName==""|| requestObject.email=="") {
       return  false;
      }
     
      else if (pattern.test(requestObject.email) == false) {
        return false;
      }
      else{
          return true;
      }
  };
})(module.exports);