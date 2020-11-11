const express = require('express')
const router = express.Router();

const post = require("../controllers/post.controller.js");
const multer = require('../middleware/multer-config');

  // Récupérer tous les posts
  router.get("/", post.findAll);

  // Création d'un nouveau post
  router.post("/", multer, post.create);

  // Supprimer un post avec Id
  router.delete("/:postId", post.delete);

module.exports = router;








// Retrieve a single Customer with customerId
//app.get("/customers/:customerId", customers.findOne);

// Update a Customer with customerId
//app.put("/customers/:customerId", customers.update);

// Create a new Customer  <= erreurrrrrrrrrrrrrrrrrrrrrrrr
//app.delete("/customers", customers.deleteAll);