const connectionMySql = require("../models/db.js");
const Stat = require("../models/modelsStat.js");

// ----------------------------------------------------------------------------------------
// 
// ----------------------------------------------------------------------------------------
Stat.postRecent = (result) => {  
    connectionMySql.query("SELECT u_pseudo AS pseudo,count(p_texte) AS Nb_post FROM t_publication INNER JOIN t_user ON p_user_createur = u_id WHERE (p_date_creation > u_date_derniere_activite) GROUP BY u_pseudo ;",(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, res);
    });
    console.log("Changement statistique : ");
  };

module.exports = Stat;