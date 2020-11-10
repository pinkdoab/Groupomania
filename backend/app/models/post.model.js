const sql = require("./db.js");

// constructor
const Post = function(post) {
  this.titre = post.titre;
  this.image = post.image;
};


// ----------------------------------------------------------------------------------------
// Récupérer tous les posts de la base de données
// ----------------------------------------------------------------------------------------
Post.getAll = result => {
    sql.query("SELECT * FROM Post", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("post: ", res);
      result(null, res);
    });
  };


// ----------------------------------------------------------------------------------------
// Créer et enregistrer un nouveau post
// ----------------------------------------------------------------------------------------
Post.create = (newPost, result) => {
  sql.query("INSERT INTO post SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Création du post: ", { id: res.insertId, ...newPost });
    result(null, { id: res.insertId, ...newPost });
  });
};


// ----------------------------------------------------------------------------------------
// Supprimer un post avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
Post.remove = (id, result) => {
  sql.query("DELETE FROM post WHERE id = ?", id, (err, res) => {
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
/*
Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
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
*/

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