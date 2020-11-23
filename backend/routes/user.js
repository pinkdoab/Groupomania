const express = require('express')
const router = express.Router();

const userCtrl = require("../controllers/user.js");

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get("/", userCtrl.findAll);
router.get("/:userId", userCtrl.findOne);

module.exports = router;