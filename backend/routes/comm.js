const express = require('express')
const router = express.Router();

const commCtrl = require("../controllers/comm.js");

router.get('/', commCtrl.findAll);


module.exports = router;