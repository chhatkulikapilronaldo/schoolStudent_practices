(() => {
  module.exports = async (loginUserDetails) => {
    const helper = require("../../common/index");
    const output = await helper.mysqlHelper.query(`Select * from students where email='${loginUserDetails.email}'`);
    if (output[0][0].email) {
      return true;
    } else {
      return false;
    }
  };
})();
