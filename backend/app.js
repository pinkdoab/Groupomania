const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

const CommRoutes = require('./routes/comm');
const PostRoutes = require('./routes/post');
const UserRoutes = require('./routes/user');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use('/comm', CommRoutes);
app.use('/post', PostRoutes);
app.use('/user', UserRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));         // requete http://localhost:3000/images/photoA_1605106010.jpg

module.exports = app;