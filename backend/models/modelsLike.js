// constructeur pour les requetes (à gauche : nom BdD et à droite création variable du post)
const Like = function(like) {
    this.o_commentaire = like.commId;
    this.o_user = like.userId;
    this.o_avis = like.avisId;
    this.o_date_creation = like.date_creation    // 'AAAA-MM-JJ HH:MM:SS'
  };

  module.exports = Like;