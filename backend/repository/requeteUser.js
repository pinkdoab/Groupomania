const connectionMySql = require("../models/db.js");
const User = require("../models/modelsUser.js");


// ----------------------------------------------------------------------------------------
// Créer un nouveau user
// ----------------------------------------------------------------------------------------
User.create = (newUser, result) => {

  connectionMySql.query("INSERT INTO t_user SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      //result(null, res);
      console.log("Création du user: ", { id: res.insertId, ...newUser });
      //result(null, { id: res.insertId, ...newUser });
      result(null, {message: `La création du user ${newUser.u_pseudo} c'est bien passé`});
    });
};


// ----------------------------------------------------------------------------------------
// Connection user
// ----------------------------------------------------------------------------------------
User.findByPseudo = (pseudo, result) => {
  console.log('***** Début User.findByPseudo *****');
  connectionMySql.query(`SELECT * FROM t_user WHERE u_pseudo = '${pseudo}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("user trouvé : ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};


// ----------------------------------------------------------------------------------------
// Récupérer tous les users de la base de données
// ----------------------------------------------------------------------------------------
User.getAll = result => {
  
  connectionMySql.query("SELECT u_id AS userId, u_pseudo AS pseudo FROM t_user;", (err, res) => {
    if (err) {
      console.log('ERROR User.getAll', err);
      result(null, err);
      return;
    }
    console.log('OK User.getAll');
    //console.log("user getAll: ", res);
    result(null, res);
  });
};

// ----------------------------------------------------------------------------------------
// Récupérer un user avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
User.findById = (userId, result) => {
  connectionMySql.query(`SELECT u_id AS id, u_pseudo AS pseudo, u_email AS email, u_date_derniere_activite AS date_derniere_activite, u_date_creation AS date_creation FROM t_user WHERE u_id = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

// ----------------------------------------------------------------------------------------
// Supprimer un user avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
User.remove = (id, result) => {
  connectionMySql.query("DELETE FROM t_user WHERE u_id = ?", id, (err, res) => {
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

    console.log("Suppression du user avec id: ", id);
    result(null, res);
  });
};
// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
User.updateConnexion = (userId, result) => {
  connectionMySql.query("UPDATE t_user SET u_date_derniere_activite = NOW() WHERE u_id= ?", userId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
  console.log("Changement date de deconnection : ", userId);
  result(null, null);
};



module.exports = User;