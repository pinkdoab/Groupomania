const User = function(user) {
    this.u_pseudo = user.pseudo;   // à gauche : nom dans la BdD
    this.u_email = user.email;
    this.u_password = user.password;
    this.u_date_creation = user.date_creation;
    this.u_date_derniere_activite = user.date_derniere_activite;
  };

  module.exports = User;