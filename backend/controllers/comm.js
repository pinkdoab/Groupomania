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