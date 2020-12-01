const Stat = require("../repository/requeteStat.js");

// ----------------------------------------------------------------------------------------
// Statistique aprés dernière connexion
// ----------------------------------------------------------------------------------------
exports.stat = (req, res) => {
    console.log("rrrrrr")
    Stat.postRecent((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Une erreur s'est produite lors de la récupération des statistiques"
        });
      else res.send(data);
    });
  };