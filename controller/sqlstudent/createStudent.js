"use strict";
(() => {
  const create_user = require("../sql/insert_student");
  const validationHelper = require("../../common/index");
  module.exports = async (req, res, next) => {
    try {
      const requestObject = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        Password: btoa(req.body.Password),
      };

      const valdidator = await validationHelper.validationHelper.uservalidation(
        requestObject
      );
      if (valdidator == true) {
        const output2 = await create_user(requestObject);
        if (output2 == true) {
          res.status(201).send("insert Succesful");
        } else {
          res.status(400).send("failed to insert");
        }
      } else {
        res.status(400).send("Please validate Your payload");
      }
    } catch (error) {
      console.log(error);
    }
  };
})();
