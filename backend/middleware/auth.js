const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log('\n***** début authentification (auth.js) *****')
  try {
    //console.log('***** début authentification (auth.js) *****')
    const token = req.headers.authorization.split(' ')[1];
    var decoded = jwt.decode(token, {complete: true});

    console.log('\n--- token décodé ---') 
    console.log('decoded.header : ', decoded.header);
    console.log('decoded.payload : ', decoded.payload);
    
    var iat = new Date(0);
    iat.setUTCSeconds(decoded.payload.iat);
    var exp = new Date(0);
    exp.setUTCSeconds(decoded.payload.exp);
     
    console.log('créer le : ', iat.toLocaleString());    
    console.log('expire le : ', exp.toLocaleString());

    console.log('\n--- token vérifié ---') 
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;

    console.log('userId du token : ', userId);
    console.log('userId de body : ', req.body.userId);

    if (req.body.userId && req.body.userId !== userId) {   // au cas où userId EXISTE...
      res.status(401).json({ error: 'Le req.body.userId ne correspond pas au token !' });
      console.log('Authentification ratée');
    } else {
      console.log('Authentification réussie');
      next();
    }
  } catch {
    res.status(401).json({ error: 'Le token est invalide !' });
  }
  console.log('***** fin authentification (auth.js) *****\n')
};