const express = require('express')
const router = express.Router();

const likeCtrl = require("../controllers/like.js");
const auth = require('../middleware/auth');

// Like/Delike
//router.post("/", likeCtrl.create);
router.post("/", auth, likeCtrl.create);

module.exports = router;