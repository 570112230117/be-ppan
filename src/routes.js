const express = require("express");
const router = express.Router();
const userController = require("./controllers/UserController");
// api
router.get("/userController", userController.findAll);

module.exports = router;
