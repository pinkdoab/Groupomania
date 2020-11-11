const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

const PostRoutes = require('./routes/postRoutes')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));         // requete http://localhost:3000/images/photoA_1605106010.jpg

app.use('/post', PostRoutes);

module.exports = app;