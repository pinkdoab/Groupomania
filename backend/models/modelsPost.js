// constructeur pour les requetes (équivalence entre nom BdD et nom serveur)
const Post = function(post) {
    this.p_texte = post.p_texte;
    this.p_image_url = post.p_image_url;
  };

  module.exports = Post;