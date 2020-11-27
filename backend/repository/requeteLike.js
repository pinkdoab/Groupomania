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

module.exports = Like;