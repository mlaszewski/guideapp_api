const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "guideapp",
    password: "ZAQ!2wsx",
    port: 5432,
});

module.exports = pool;