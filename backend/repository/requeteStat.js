const connectionMySql = require("../models/db.js");
const Stat = require("../models/modelsStat.js");

// ----------------------------------------------------------------------------------------
//   
// ----------------------------------------------------------------------------------------
Stat.postRecent = (userId, result) => {  
    //connectionMySql.query("SELECT post, alias.date, pseudo FROM (SELECT p_id AS post, p_date_creation AS date, u_pseudo AS pseudo FROM t_publication INNER JOIN  t_user ON p_user_createur = u_id) AS alias INNER JOIN t_user ON pseudo = u_pseudo WHERE alias.date > (SELECT u_date_derniere_activite FROM t_user WHERE u_id= ? )", userId, (err, res) => {

    connectionMySql.query("SELECT u_pseudo AS pseudo, count(p_id) AS post, u_date_derniere_activite AS date FROM t_publication INNER JOIN t_user ON p_user_createur = u_id GROUP BY u_pseudo ORDER BY u_date_derniere_activite;", userId, (err, res) => {
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