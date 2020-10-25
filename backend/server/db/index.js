const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'cheval62',
    user: 'pink',
    database: 'elevage',
    host: 'localhost',
    port: '3306'
});

let animaldb = {};

animaldb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Animal`, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });   
};

animaldb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Animal WHERE id = ?`, [id], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });       
}

module.exports = animaldb;