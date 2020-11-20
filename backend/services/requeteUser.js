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
User.findById = (pseudo, result) => {

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

    // not found user with the id
    result({ kind: "not_found" }, null);
  });
};


module.exports = User;