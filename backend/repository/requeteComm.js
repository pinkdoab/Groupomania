const connectionMySql = require("../models/db.js");
const Comm = require("../models/modelsComm.js");

// ----------------------------------------------------------------------------------------
// Récupérer tous les posts de la base de données
// ----------------------------------------------------------------------------------------
Comm.getAll = result => {
  
    //connectionMySql.query("SELECT * FROM t_commentaire;", (err, res) => {
    connectionMySql.query("SELECT c_id, c_texte, c_date_creation, c_publication , c_createur, t_user.u_pseudo AS createurPseudo FROM t_commentaire INNER JOIN t_user ON c_createur = u_id;", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }  
      console.log("comm getAll: ", res);
      result(null, res);
    });
  };

// ----------------------------------------------------------------------------------------
// Créer et enregistrer un nouveau commentaire
// ----------------------------------------------------------------------------------------
Comm.create = (newComm, result) => {

  connectionMySql.query("INSERT INTO t_commentaire SET ?", newComm, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, { id: res.insertId, ...newComm });
  });

};  

// ----------------------------------------------------------------------------------------
// Supprimer un commentaire avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
Comm.remove = (id, result) => {
  connectionMySql.query("DELETE FROM t_commentaire WHERE c_id = ?", id, (err, res) => {
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

    console.log("Suppression du commentaire avec id: ", id);
    result(null, res);
  });
};

module.exports = Comm;