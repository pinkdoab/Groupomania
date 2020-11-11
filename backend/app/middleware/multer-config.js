// gestion du téléchargement des images
const multer = require('multer');


const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};



const storage = multer.diskStorage({
  destination: (req, file, callback) => {

    //console.log('file : ' + file);
    callback(null, 'app/images');
    //callback(null, '/Users/pink01/Documents/git/groupomania/backend/app/images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0].split(" ").join("_");
    console.log(file.originalname)
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + '_' + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');