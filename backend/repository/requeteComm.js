const connectionMySql = require("../models/db.js");
const Comm = require("../models/modelsComm.js");

// ----------------------------------------------------------------------------------------
// Récupérer tous les posts de la base de données
// ----------------------------------------------------------------------------------------
Comm.getAll = result => {
  
    connectionMySql.query("SELECT * FROM t_commentaire;", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }  
      console.log("comm getAll: ", res);
      result(null, res);
    });
  };
module.exports = Comm;