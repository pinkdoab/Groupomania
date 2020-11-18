const connectionMySql = require("../models/db.js");
const Post = require("../models/modelsPost.js");

// ----------------------------------------------------------------------------------------
// Récupérer tous les posts de la base de données
// ----------------------------------------------------------------------------------------
Post.getAll = result => {
    //sql.query("SELECT id, p_texte AS texte, p_image_url AS imageUrl, p_date_creation AS date FROM t_publication", (err, res) => {
    connectionMySql.query("SELECT id, p_texte AS texte, p_image_url AS imageUrl, p_date_creation AS date, t_user.u_pseudo AS createur  FROM t_publication INNER JOIN t_user ON p_user_createur = u_id;", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("post getAll: ", res);
      result(null, res);
    });
  };


// ----------------------------------------------------------------------------------------
// Créer et enregistrer un nouveau post
// ----------------------------------------------------------------------------------------
Post.create = (newPost, result) => {

  connectionMySql.query("INSERT INTO t_publication SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    //console.log("Création du post: ", { id: res.insertId, ...newPost });
    result(null, { id: res.insertId, ...newPost });
  });

};


// ----------------------------------------------------------------------------------------
// Supprimer un post avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
Post.remove = (id, result) => {
  connectionMySql.query("DELETE FROM t_publication WHERE id = ?", id, (err, res) => {
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

    console.log("Suppression du post avec id: ", id);
    result(null, res);
  });
};

// ----------------------------------------------------------------------------------------
// Récupérer un post avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
Post.findById = (customerId, result) => {
  connectionMySql.query(`SELECT * FROM t_publication WHERE id = ${customerId}`, (err, res) => {
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


/*
Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
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

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};



Customer.removeAll = result => {
  sql.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};
*/
module.exports = Post;