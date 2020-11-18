const User = function(user) {
    this.u_pseudo = user.u_pseudo;   // à gauche : nom dans la BdD
    this.u_email = user.u_email;
    this.u_password = user.u_password;
  };

  module.exports = User;