const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../services/requeteUser.js");


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            u_pseudo: req.body.nom,
            u_email: req.body.email,
            u_password: hash
        });

        // Sauvegarde du user dans la base de données
        User.create(user, (err, data) => {
            if (err)
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la création du user"
            });
            else res.status(200).send(data);
        });
    })
    .catch(error => res.status(500).json({ error }));
};
// --------------------------------------------------------------------------
exports.login = (req, res, next) => {
    console.log('req.body', req.body);
    console.log('req.body.userId', req.body.userId);

    User.findById(req.body.userId, (err, data) => {
      console.log('data findById : ', data)
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `user non trouvé avec userId : ${req.body.userId}.`
            });
          } else {
            res.status(500).send({
              message: "erreur lors de la récupération du user avec userId " + req.body.userId
            });
          }
        } else {
            console.log('data : ', data);

            console.log('data.u_password : ', data.u_password);
            console.log('req.body.password : ', req.body.password);

            bcrypt.compare(req.body.password, data.u_password)
            .then(valid => {
                if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
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
            //console.log('error : ', error)
            .catch(error => res.status(500).json({ error }));
            //.catch(error => res.status(500).json({ error: 'probleme !' }));
        }
    });
};