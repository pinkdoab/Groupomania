const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../repository/requeteUser.js");


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            pseudo: req.body.nom,
            email: req.body.email,
            password: hash,
            date_creation: new Date().toLocaleString(),
            date_derniere_activite: new Date().toLocaleString()
        });

        // Sauvegarde du user dans la base de données
        User.create(user, (err, data) => {
            if (err) {          
              res.status(500).send({ message: err.message || "Une erreur s'est produite lors de la création du user"});

             } else res.status(200).send(data);
        });
    })
    .catch(error => res.status(500).json({ error }));
};
// --------------------------------------------------------------------------
exports.login = (req, res, next) => {
  console.log('\n***** Début exports.login *****');
  console.log('req.body : ', req.body);

  User.findByPseudo(req.body.pseudo, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        console.log(`Pseudo non trouvé avec userId : ${req.body.pseudo}`)
        res.status(401).send({ messagePseudo: `Pseudo ${req.body.pseudo} non trouvé ` });          
      } else {
        console.log(`erreur lors de la récupération du user avec userId " ${req.body.pseudo}`)
        res.status(500).send({ messagePseudo: `Erreur lors de la récupération du pseudo " ${req.body.pseudo}` });
      }
    } else {
      bcrypt.compare(req.body.password, data.u_password)
      .then(valid => {
        if (!valid) {
          console.log(`Password incorrect pour pseudo ${req.body.pseudo}`)
          return res.status(401).json({ messagePassword: 'Password incorrect !' });
        }
        res.status(200).json({
          userId: data.u_id,
          token: jwt.sign(
            { userId: data.u_id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '2 days' }
          )
        });  
      })
      .catch(error => res.status(500).json({ error }));
    }
  });
};
// ----------------------------------------------------------------------------------------
// Récupérer tous les users de la base de données
// ----------------------------------------------------------------------------------------
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(501).send({
        message:
          err.message || "Une erreur s'est produite lors de la récupération des users"
      });
    else res.send(data);
  });
};
// ----------------------------------------------------------------------------------------
// Récupérer un simple user avec userId
// ----------------------------------------------------------------------------------------
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `user non trouvé avec id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "erreur lors de la récupération du user avec id " + req.params.userId
        });
      }
    } else res.send(data);
  });
};

// ----------------------------------------------------------------------------------------
// Supprimer un user avec un Id spécifié dans la demande
// ----------------------------------------------------------------------------------------
exports.delete = (req, res) => {
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `user non trouvé avec un Id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Impossible de supprimer user avec un Id " + req.params.userId
        });
      }
    } else res.send({ message: `user est bien supprimé !` });
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  console.log(req.body);

  User.updateConnexion(req.params.userId, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Impossible de changer la derniere connection du user avec un Id " + req.params.userId
      });
    } else res.send({ message: `date de déconnection bien enregistrée !` });
  });
};

