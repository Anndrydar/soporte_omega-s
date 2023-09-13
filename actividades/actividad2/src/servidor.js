const express = require('express')
const server = express()
const port = process.env.port || 1000 
server.use(express.json())

server.use(require('../src/rutas/usuario'))

server.listen(port)
console.log('Servidor corriendo por el puerto ',port)