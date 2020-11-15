const User = function(user) {
    console.log('début modèle user')
    this.u_nom = user.u_nom;   // this.u-nom = nom dans la base
    this.u_email = user.u_email;
    this.u_code_secret = user.u_code_secret;
  };

  module.exports = User;