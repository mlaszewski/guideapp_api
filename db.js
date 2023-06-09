const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config({ path: './.env'})

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
});

module.exports = pool;