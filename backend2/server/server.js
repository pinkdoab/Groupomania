const express = require('express');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/Post', apiRouter);

app.listen(process.env.PORT || '3000', () => {

    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);

});
