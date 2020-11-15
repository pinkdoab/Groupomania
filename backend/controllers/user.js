const bcrypt = require('bcrypt');
const User = require("../services/requeteUser.js");


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            u_nom: req.body.nom,
            u_email: req.body.email,
            u_code_secret: hash
        });

        // Sauvegarde du user dans la base de données
        User.create(user, (err, data) => {
            if (err)
            res.status(500).send({
                message:
                err.message || "Une erreur s'est produite lors de la création du user"
            });
            else res.send(data);
        });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    console.log('req.body')
    console.dir(req.body);

    User.findById(req.body.email, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `user non trouvé avec email : ${req.body.email}.`
            });
          } else {
            res.status(500).send({
              message: "erreur lors de la récupération du user avec email " + req.body.email
            });
          }
        //} else res.send(data);
        } else {
            console.log('data : ', data);

            console.log('data.email : ', data.u_code_secret);
            console.log('req.body : ', req.body.password);

            bcrypt.compare(req.body.password, data.u_code_secret)
            .then(valid => {
                if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
                }
                res.status(200).json({
                //...data,
                userId: data.u_id,
                token: 'TOKEN'
                });   
            })                
            .catch(error => res.status(500).json({ error }));
        }
    });
};