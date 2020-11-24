// constructeur pour les requetes (à gauche : nom BdD et à droite création variable du comm)
const Comm = function(comm) {
    this.c_texte = comm.texte;   // à gauche : nom dans la BdD
    this.c_createur = comm.createur;
    this.c_date_creation = comm.date_creation;
    this.c_publication = comm.publication;
}
module.exports = Comm;