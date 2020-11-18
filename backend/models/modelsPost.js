// constructeur pour les requetes (à gauche : nom BdD et à droite création variable du post)
const Post = function(post) {
    this.p_texte = post.p_texte;
    this.p_image_url = post.p_image_url;
    this.p_user_createur = 1;
    this.p_date_creation = '2020-09-29 20:30:54'    // 'AAAA-MM-JJ HH:MM:SS'
  };

  module.exports = Post;