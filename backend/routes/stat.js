const express = require('express')
const router = express.Router();

const statCtrl = require("../controllers/stat.js");
const auth = require('../middleware/auth');

// Nb de nouveaux posts depuis la dernière connexion 
router.get('/:userId', auth, statCtrl.stat);

module.exports = router;