const connectionMySql = require("../models/db.js");
const Like = require("../models/modelsLike.js");


// ----------------------------------------------------------------------------------------
// Créer et enregistrer un nouveau like
// ----------------------------------------------------------------------------------------
Like.create = (newLike, result) => {
    connectionMySql.query("INSERT INTO t_opinion SET ?", newLike, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
        }
        console.log("Création du like : ", { id: res.insertId, ...newLike });
        result(null, { id: res.insertId, ...newLike });
    });
};


// ----------------------------------------------------------------------------------------
// Récupérer un post avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
Like.findById = (commId, userId, result) => {
    connectionMySql.query(`SELECT * FROM t_opinion WHERE o_user = ${userId} AND o_commentaire = ${commId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found like: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

// ----------------------------------------------------------------------------------------
// Supprimer un like avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
Like.remove = (id, result) => {
    connectionMySql.query("DELETE FROM t_opinion WHERE o_id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("Suppression du like avec id: ", id);
      result(null, res);
    });
  };

module.exports = Like;