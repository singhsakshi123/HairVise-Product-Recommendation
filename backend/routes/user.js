const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");
const authentication = require('../middlewares/Auth');

router.post("/register", userController.userRegister);

router.post("/login", userController.userLogin);

router.get("/logout",authentication,userController.userLogout);

router.get("/profile",authentication,userController.userProfile);

module.exports = router;