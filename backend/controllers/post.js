const Post = require("../repository/requetePost.js");
const fs = require('fs');
const { Console } = require("console");

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
    if(err) {
      res.status(404).send({
        message: "Le post avec un Id " + req.params.postId + " n'existe pas"
      });
    } else {
      console.log('data.p_user_createur', data.p_user_createur)
      console.log('req.body.userId', req.body.userId)
      if (data.p_user_createur !== req.body.userId) {
        res.status(401).send({
          message: "Interdit de supprimer le post d'un autre user !"
        });
      } else {
        console.log('data : ')
        console.dir(data);
        if(data.p_image_url != 'aucune') {
          const filename = data.p_image_url.split('/images/')[1];
          console.log('data.imageUrl : ' + filename)
          fs.unlink(`images/${filename}`, () => {
            console.log("Suppression de l'image du serveur : " + filename)
          });
        }
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
      }
    }
  });
};