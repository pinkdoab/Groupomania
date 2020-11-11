const express = require('express')
const router = express.Router();

const postControleur = require("../controllers/post.controller.js");
const multer = require('../middleware/multer-config');

  // Récupérer tous les posts
  router.get("/", postControleur.findAll);

  // Récupérer un simple post avec customerId
  router.get("/:customerId", postControleur.findOne);

  // Création d'un nouveau post
  router.post("/", multer, postControleur.create);

  // Supprimer un post avec Id
  router.delete("/:postId", postControleur.delete);

module.exports = router;










// Update a Customer with customerId
//app.put("/customers/:customerId", customers.update);

// Create a new Customer  <= erreurrrrrrrrrrrrrrrrrrrrrrrr
//app.delete("/customers", customers.deleteAll);