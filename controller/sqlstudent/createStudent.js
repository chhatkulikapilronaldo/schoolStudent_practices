(() => {
  const create_user = require("../sql/insert_student");
  const validationHelper = require("../../common/index");
  module.exports = async (req, res, next) => {
    const requestObject = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    };

    const valdidator= await validationHelper.validationHelper.uservalidation(requestObject)
    if(valdidator==true)
    {
        const output2 = await create_user(req.body);
        if (output2 == true) {
            res.send("insert Succesful");
          }
    }


    else{
        res.send("Please validate Your payload")
    }
   

  
  };
})();
