const { sign } = require("jsonwebtoken");
const Like = require("../repository/requeteLike.js");

// Gestion des Likes et Dislikes
exports.create = (req, res, next) => {
  console.log('debut creation : ')
  console.log('req.body.commId : ', req.body.commId)
  console.log('req.body.userId : ', req.body.userId)
  console.log('req.body.avis : ', req.body.avis)

  //var avisStocke = 'inconnu';
  Like.findById(req.body.commId, req.body.userId, (err, data, next) => {


    let avisFavorable = null;
    let avisDefavorable = null;

    if (data !== null)
    {

      console.log('data ', data)
      console.log('data.o_favorable ', data.o_favorable)
      console.log('data.o_defavorable ', data.o_defavorable)

      console.log('trouvé OK ')
      Like.remove(data.o_id, (err, data) => {
        console.log('effacer OK ');
      })
            // Si like = 1, ajoute userId à usersLiked et likes est égale au nb d'éléments dans usersLiked
            if (req.body.avis == 1) {
              if (data.o_favorable == 1 && data.o_defavorable == null) { avisFavorable = 1; avisDefavorable = null;}
              if (data.o_favorable == null && data.o_defavorable == 1) { avisFavorable = null; avisDefavorable = null;}
              if (data.o_favorable == null && data.o_defavorable == null) { avisFavorable = 1; avisDefavorable = null;}
            } 
            // Si like = -1, ajoute userId à usersDisliked et dislikes est égale au nb d'éléments dans usersLiked
            else if (req.body.avis == -1) {
              if (data.o_favorable == 1 && data.o_defavorable == null) { avisFavorable = null; avisDefavorable = null;}
              if (data.o_favorable == null && data.o_defavorable == 1) { avisFavorable = null; avisDefavorable = 1;}
              if (data.o_favorable == null && data.o_defavorable == null) { avisFavorable = null; avisDefavorable = 1;}
            }
    } else {
      console.log('trouvé NO ') 
            // Si like = 1, ajoute userId à usersLiked et likes est égale au nb d'éléments dans usersLiked
            if (req.body.avis === 1) {
              avisFavorable = 1;
            } 
            // Si like = -1, ajoute userId à usersDisliked et dislikes est égale au nb d'éléments dans usersLiked
            else if (req.body.avis === -1) {
              avisDefavorable = 1;  
            }          
    }
    //});   

    //if (req.body.avis !== 0) {
      //console.log('data ',data);
      //console.log('data.o_defavorable ',data.o_defavorable);

        //'if(exist avis comm =n et user =n alors delete puis return)'



  

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

      //} else res.send({message:"like neutre"});
      
  });        


};
