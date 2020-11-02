module.exports = app => {
  const post = require("../controllers/post.controller.js");
  
  // Récupérer tous les posts
  app.get("/post", post.findAll);

  // Création d'un nouveau post
  app.post("/post", post.create);

  // Supprimer un post avec Id
  app.delete("/post/:postId", post.delete);

};





// Retrieve a single Customer with customerId
//app.get("/customers/:customerId", customers.findOne);

// Update a Customer with customerId
//app.put("/customers/:customerId", customers.update);

// Create a new Customer  <= erreurrrrrrrrrrrrrrrrrrrrrrrr
//app.delete("/customers", customers.deleteAll);