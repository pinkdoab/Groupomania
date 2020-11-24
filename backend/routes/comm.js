const express = require('express')
const router = express.Router();

const commCtrl = require("../controllers/comm.js");
const auth = require('../middleware/auth');

// Récupérer tous les commentaires
router.get('/', auth, commCtrl.findAll);

// Création d'un nouveau commentaire
router.post("/", auth, commCtrl.create);

// Supprimer un commentaire avec commId
router.delete("/:commId", auth, commCtrl.delete);

module.exports = router;