"use strict";
(() => {
    const express = require("express");
    const router = express.Router();
    const userController = require("../controller/sqlstudent/createStudent")
    const getAllUser = require("../controller/sqlstudent/select_student")
    const getupdate = require("../controller/sqlstudent/updatestudent")
    const getdelete = require("../controller/sqlstudent/delete_student")
    const Login = require("../controller/sqlstudent/login")
    
    
    router.post('/create_student', userController);
    router.get('/select',getAllUser);
    router.put('/update/:uuid',getupdate);
    router.put('/delete/:uuid',getdelete);
    router.post('/login_student',Login);

    

    
    module.exports = router;
})()