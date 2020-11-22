const Post = require("../repository/requetePost.js");
const fs = require('fs');

// ----------------------------------------------------------------------------------------
// Récupérer tous les posts de la base de données
// ----------------------------------------------------------------------------------------
exports.findAll = (req, res) => {
    Post.getAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Une erreur s'est produite lors de la récupération des posts"
        });
      else res.send(data);
    });
  };

// ----------------------------------------------------------------------------------------
// Récupérer un simple post avec customerId
// ----------------------------------------------------------------------------------------
exports.findOne = (req, res) => {
  Post.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `post non trouvé avec id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "erreur lors de la récupération du post avec id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};


// ----------------------------------------------------------------------------------------
// Créer et enregistrer un nouveau post
// ----------------------------------------------------------------------------------------
exports.create = (req, res) => {
  
  // La requête possède un req.body ?
  if (!req.body) {
    res.status(401).send({
      message: "Le req.body ne peut pas être vide!"
    });
  }
  // La requête possède un req.file (pour filename non indéfini) ?
  var image = 'aucune'
  if (req.file) {
    image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  }
  // Création d'un post
  const post = new Post({
    texte: req.body.texte,
    image_url: image,
    createur: req.body.createur,
    date_creation: new Date().toLocaleString()
  });
  
  // Sauvegarde du post dans la base de données
  Post.create(post, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur s'est produite lors de la création du post"
      });
    else res.send(data);
  });
};


// ----------------------------------------------------------------------------------------
// Supprimer un post avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
exports.delete = (req, res) => {
  Post.findById(req.params.postId, (err, data, next) => {
    console.log('data : ')
    console.dir(data);
    if(data.p_image_url != 'aucune') {
      const filename = data.p_image_url.split('/images/')[1];
      console.log('data.imageUrl : ' + filename)
      fs.unlink(`images/${filename}`, () => {
        console.log("Suppression de l'image du serveur : " + filename)
      });
    }
  });

  Post.remove(req.params.postId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `post non trouvé avec un Id ${req.params.postId}.`
        });
      } else {
        res.status(500).send({
          message: "Impossible de supprimer le post avec un Id " + req.params.postId
        });
      }
    } else res.send({ message: `Le post est bien supprimé !` });
  });
};



//----------------------------------------------------------------------------------------
/*
// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};



// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Customer.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Customers were deleted successfully!` });
  });
};*/
