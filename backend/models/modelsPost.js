// constructeur pour les requetes (à gauche : nom BdD et à droite création variable du post)
const Post = function(post) {
    this.p_texte = post.texte;
    this.p_image_url = post.image_url;
    this.p_user_createur = post.createur;
    this.p_date_creation = post.date_creation    // 'AAAA-MM-JJ HH:MM:SS'
  };

  module.exports = Post;