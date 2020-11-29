const { sign } = require("jsonwebtoken");
const Like = require("../repository/requeteLike.js");

// Gestion des Likes et Dislikes
exports.create = (req, res, next) => {
  console.log('debut creation : ')
  console.log('req.body.commId : ', req.body.commId)
  console.log('req.body.userId : ', req.body.userId)


  Like.findById(req.body.commId, req.body.userId, (err, data, next) => {
    console.log('data : ', data)

    if (data !== null)
    {
      console.log('trouvé OK ');
      console.log('data.o_id ', data.o_id);

      Like.remove(data.o_id, (err, data) => {
        console.log('effacer OK ');

      })



    } else {
      console.log('trouvé NO ')     
    }
    });
          
        
    if (req.body.avis !== 0) {


        //'if(exist avis comm =n et user =n alors delete puis return)'

        let avisFavorable = null;
        let avisDefavorable = null;

        // Si like = 1, ajoute userId à usersLiked et likes est égale au nb d'éléments dans usersLiked
        if (req.body.avis === 1) {
          avisFavorable = 1;
        } 
        // Si like = -1, ajoute userId à usersDisliked et dislikes est égale au nb d'éléments dans usersLiked
        else if (req.body.avis === -1) {
          avisDefavorable = 1;  
        }

        // Création d'un like
        const newLike = new Like({
            commId: req.body.commId,
            userId: req.body.userId,
            date_creation: new Date().toLocaleString(),
            favorable: avisFavorable,
            defavorable: avisDefavorable
        });
      
        // Sauvegarde du post dans la base de données
        Like.create(newLike, (err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Une erreur s'est produite lors de la création du like"
            });
        else res.send('ok'); }); 

      } else res.send({message:"like neutre"});
        
};
