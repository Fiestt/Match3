const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "776809Alexander",
    host: "localhost",
    port: 5432,
    database: "match"
})

module.exports = pool;