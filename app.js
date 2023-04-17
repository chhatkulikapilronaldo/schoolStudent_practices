const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysqlHelper = require("./common/mysqlHelper");
const mainroute = require("./routes/routes")
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use("/",mainroute);

let port = process.env.port || 8000;
app.listen(port, ()=>
{
 mysqlHelper.init();  
console.log(`Server running on the port ${port}`);
}
)
