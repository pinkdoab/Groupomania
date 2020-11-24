const Comm = require("../repository/requeteComm.js");

// ----------------------------------------------------------------------------------------
// Récupérer tous les commentaires de la base de données
// ----------------------------------------------------------------------------------------
exports.findAll = (req, res) => {
    Comm.getAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Une erreur s'est produite lors de la récupération des commentaires"
        });
      else res.send(data);
    });
  };

  // ----------------------------------------------------------------------------------------
// Créer et enregistrer un nouveau commentaire
// ----------------------------------------------------------------------------------------
exports.create = (req, res) => {
  
  // La requête possède un req.body ?
  if (!req.body) {
    res.status(401).send({
      message: "Le req.body ne peut pas être vide!"
    });
  }
  // Création d'un post
  const comm = new Comm({
    texte: req.body.texte,
    createur: req.body.createur,
    date_creation: new Date().toLocaleString(),
    publication: req.body.publication
  });
  
  // Sauvegarde du post dans la base de données
  Comm.create(comm, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur s'est produite lors de la création du commentaire"
      });
    else res.send(data);
  });
};

  // ----------------------------------------------------------------------------------------
// Supprimer un commentaire avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
exports.delete = (req, res) => {
  Comm.remove(req.params.commId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `commentaire non trouvé avec un Id ${req.params.commId}.`
        });
      } else {
        res.status(500).send({
          message: "Impossible de supprimer le commentaire avec un Id " + req.params.commId
        });
      }
    } else res.send({ message: `Le commentaire est bien supprimé !` });
  });
};