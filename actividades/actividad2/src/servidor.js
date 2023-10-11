const express = require('express')
const cors = require('cors')
const server = express()
const port = process.env.port || 1000 
server.use(express.json())
server.use(cors())
server.use(express.static("./archivos"));
server.use(require('../src/rutas/usuario'))
server.use(require('../src/rutas/servicio'))
server.use(require('../src/rutas/empresa'))
server.use(require('../src/rutas/informacion'))
server.use(require('../src/rutas/registro/empresa'))
server.use(require('../src/rutas/login/empresa'))

server.listen(port)
console.log('Servidor corriendo por el puerto ',port)