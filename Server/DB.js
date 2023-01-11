const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "sql6.freesqldatabase.com",
    user: "sql6589744",
    password: "T23HwzTmbB",
    database: "sql6589744",
    port: 3306
});

module.exports = pool