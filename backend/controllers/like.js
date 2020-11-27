const Like = require("../repository/requeteLike.js");

// Gestion des Likes et Dislikes
exports.create = (req, res, next) => {
    /*Post.findById(req.params.postId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `post non trouvé avec id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "erreur lors de la récupération du post avec id " + req.params.customerId
          });
        }
      } else {
        res.send(data);
        // Si like = 1, ajoute userId à usersLiked et likes est égale au nb d'éléments dans usersLiked
        if (req.body.like === 1) {
  
        } 
        // Si like = -1, ajoute userId à usersDisliked et dislikes est égale au nb d'éléments dans usersLiked
        else if (req.body.like === -1) {
  
        } 
        // Si like = 0, supprimer userId de usersLike ou usersDisliked puis update dislikes
        else if (req.body.like === 0) {
  
        }
      }
    });*/
    console.log('like')
    //res.send('like');
    // Création d'un like
    const newLike = new Like({
        commId: req.body.commId,
        userId: req.body.userId,
        avisId: req.body.avisId,
        date_creation: new Date().toLocaleString()
    });
  
    // Sauvegarde du post dans la base de données
    Like.create(newLike, (err, data) => {
    if (err)
        res.status(500).send({
        message:
            err.message || "Une erreur s'est produite lors de la création du like"
        });
    else res.send(data);
    });



  }
  
  
  /*
    Post.findById({ _id: req.params.id })
      .then(post => {
        // Si like = 1, ajoute userId à usersLiked et likes est égale au nb d'éléments dans usersLiked
        if (req.body.like === 1) {
          if (!sauce.usersLiked.includes(req.body.userId)) {      // évite plusieurs avis positif du même user
            sauce.usersLiked.push(req.body.userId)
  
            if (!sauce.usersDisliked.includes(req.body.userId)) {     // peut passer directement de j'aime à j'aime pas
              Sauce.updateOne({ _id: req.params.id },
                { 
                  likes: sauce.usersLiked.length,
                  usersLiked: sauce.usersLiked,
                }
              )
              .then(res.status(200).json({ message: 'Vous aimez la sauce' }))
              .catch(error => res.status(500).json({ error }))
            } else {
              const indexUserId = sauce.usersDisliked.indexOf(req.body.userId)
              sauce.usersDisliked.splice(indexUserId, 1)
              Sauce.updateOne({ _id: req.params.id },
                { 
                  likes: sauce.usersLiked.length,
                  usersLiked: sauce.usersLiked,
                  dislikes: sauce.usersDisliked.length,
                  usersDisliked: sauce.usersDisliked 
                }
              )
              .then(res.status(200).json({ message: 'Vous changez d\'avis. Vous aimez la sauce' }))
              .catch(error => res.status(500).json({ error }))          
            }
          } else {
            throw 'pas plusieurs avis positif du même user';
          }
          // Si like = -1, ajoute userId à usersDisliked et dislikes est égale au nb d'éléments dans usersLiked
        } else if (req.body.like === -1) {
          if (!sauce.usersDisliked.includes(req.body.userId)) {      // évite plusieurs avis négatifs du même user
            sauce.usersDisliked.push(req.body.userId)
  
            if (!sauce.usersLiked.includes(req.body.userId)) {    // peut passer directement de j'aime à j'aime pas
              Sauce.updateOne({ _id: req.params.id },
                {
                  dislikes: sauce.usersDisliked.length,
                  usersDisliked: sauce.usersDisliked
                }
              )
              .then(res.status(200).json({ message: 'Vous n\'aimez pas la sauce' }))
              .catch(error => res.status(500).json({ error }))
            } else {
              const indexUserId = sauce.usersLiked.indexOf(req.body.userId)
              sauce.usersLiked.splice(indexUserId, 1)
              Sauce.updateOne({ _id: req.params.id },
                { 
                  likes: sauce.usersLiked.length,
                  usersLiked: sauce.usersLiked,
                  dislikes: sauce.usersDisliked.length,
                  usersDisliked: sauce.usersDisliked 
                }
              )
              .then(res.status(200).json({ message: 'Vous changez d\'avis. Vous n\'aimez pas la sauce' }))
              .catch(error => res.status(500).json({ error }))                
            }
          } else {
            throw 'pas plusieurs avis négatif du même user';
        }
          // Si like = 0, supprimer userId de usersLike ou usersDisliked puis update dislikes
        } else if (req.body.like === 0) {
  
          if (sauce.usersLiked.includes(req.body.userId)) {
            const indexUserId = sauce.usersLiked.indexOf(req.body.userId)
            sauce.usersLiked.splice(indexUserId, 1)
            Sauce.updateOne({ _id: req.params.id },
              {
                usersLiked: sauce.usersLiked,
                likes: sauce.usersLiked.length
              }
            )
            .then(res.status(200).json({ message: 'Pas de commentaire' }))
            .catch(error => res.status(500).json({ error }))
  
          } else if (sauce.usersDisliked.includes(req.body.userId)) {
            const indexUserId = sauce.usersDisliked.indexOf(req.body.userId)
            sauce.usersDisliked.splice(indexUserId, 1)
            Sauce.updateOne({ _id: req.params.id },
              {
                usersDisliked: sauce.usersDisliked,
                dislikes: sauce.usersDisliked.length
              }
            )
            .then(res.status(200).json({ message: 'Pas de commentaire' }))
            .catch(error => res.status(500).json({ error }))
          } else {
            throw 'impossible commentaire déjà supprimé';
          }
        }
      })
    .catch(error => res.status(500).json({ error }))*/
  
  