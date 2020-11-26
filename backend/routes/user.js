const express = require('express')
const router = express.Router();

const userCtrl = require("../controllers/user.js");
const auth = require('../middleware/auth');

// Création d'un nouveau user
router.post('/signup', userCtrl.signup);

// Activation d'un user
router.post('/login', userCtrl.login);

// Récupérer tous les users
router.get("/", auth, userCtrl.findAll);

// Récupérer un userId
router.get("/:userId", auth, userCtrl.findOne);

// Supprimer un user avec userId
router.delete("/:userId", auth, userCtrl.delete);

module.exports = router;