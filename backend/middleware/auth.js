const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    // get the decoded payload and header
    var decoded = jwt.decode(token, {complete: true});
    console.log('decoded.header : ', decoded.header);
    console.log('decoded.payload : ', decoded.payload);
    var iatSeconds = decoded.payload.iat;
    var expSeconds = decoded.payload.exp;
    var iat = new Date(0); // The 0 there is the key, which sets the date to the epoch
    var exp = new Date(0); // The 0 there is the key, which sets the date to the epoch
    iat.setUTCSeconds(iatSeconds);
    exp.setUTCSeconds(expSeconds);
    console.log('token (date iat : ', iat, ', date exp : ', exp, ')');       

    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      //throw 'Invalid user ID';
      res.status(401).json({error: new Error('Invalid request!')});
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};