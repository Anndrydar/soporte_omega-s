const express = require('express')
const cors = require('cors')
const server = express()
const port = process.env.port || 1000 
server.use(express.json())
server.use(cors())
server.use(require('../src/rutas/usuario'))
server.use(require('../src/rutas/servicio'))
server.use(require('../src/rutas/empresa'))

server.listen(port)
console.log('Servidor corriendo por el puerto ',port)