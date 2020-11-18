const User = function(user) {
    this.u_nom = user.u_nom;   // à gauche : nom dans la BdD
    this.u_email = user.u_email;
    this.u_code_secret = user.u_code_secret;
  };

  module.exports = User;