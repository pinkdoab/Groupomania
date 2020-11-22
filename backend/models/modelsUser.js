const User = function(user) {
    this.u_pseudo = user.pseudo;   // à gauche : nom dans la BdD
    this.u_email = user.email;
    this.u_password = user.password;
  };

  module.exports = User;