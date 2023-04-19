(() => {
    const check_user = require("./../sql/check_user")

    module.exports = async(req, res, next) => {
        try {
            const requestObject2 = {
                email: req.body.email,
                Password: req.body.Password,
              };
                const response=await check_user(requestObject2);
                   if(response===true){
                    res.status(200).send("login sucessful");
                   }
                   else{
                    res.status(400).send("login unsucessful")
                   }
        } catch (error) {
            console.log(error)
        }

    };
})()