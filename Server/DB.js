const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "sql6.freesqldatabase.com",
    user: "sql6585307",
    password: "yDPKnN5rLG",
    database: "sql6585307",
    port: 3306
});

module.exports = pool