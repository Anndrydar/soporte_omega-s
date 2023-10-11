const {Pool} = require('pg')


const p = new Pool({
    user: process.env.user || 'postgres',
    host: process.env.host  || 'localhost',
    database: process.env.database || 'Omega',
    password: process.env.password || '12345',
    port: process.env.port || '5432'   
})

module.exports = {
    p
}