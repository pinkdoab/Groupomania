const express = require('express')
const router = express.Router();

const postCtrl = require("../controllers/post.js");
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Récupérer tous les posts
router.get("/", auth, postCtrl.findAll);

// Récupérer un simple post avec customerId
router.get("/:customerId", auth, postCtrl.findOne);

// Création d'un nouveau post
router.post("/", multer, auth, postCtrl.create);

// Supprimer un post avec postId
router.delete("/:postId", auth, postCtrl.delete);

module.exports = router;