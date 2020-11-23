const express = require('express')
const router = express.Router();

const commCtrl = require("../controllers/comm.js");

router.get('/', commCtrl.findAll);
router.post("/", commCtrl.create);
router.delete("/:commId", commCtrl.delete);

module.exports = router;