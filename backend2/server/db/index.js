const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'cheval62',
    user: 'pink',
    database: 'groupomania',
    host: 'localhost',
    port: '3306'
});

let groupomaniadb = {};

groupomaniadb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Post`, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });   
};

groupomaniadb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Post WHERE id = ?`, [id], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });       
}

module.exports = groupomaniadb;