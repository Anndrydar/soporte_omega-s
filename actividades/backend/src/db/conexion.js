const {Pool} = require('pg')

const pool = new Pool({
    user: process.env.user || 'postgres',
    host: process.env.host  || 'localhost',
    database: process.env.database || 'soporte_omega',
    password: process.env.password || '12345',
    port: process.env.port || '5432'   
})

module.exports = {
    pool
}
