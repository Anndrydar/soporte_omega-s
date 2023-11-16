const sybase = require('sybase')


const sy = new Sybase(
    'host',
     port,
    'dbName',
    'username',
    'pw'
)

module.export = {
    sy
}