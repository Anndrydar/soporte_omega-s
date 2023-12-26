const express = require('express')
const cors = require('cors')
const server = express()
const port = process.env.port || 1000 
server.use(express.json())
server.use(express.urlencoded({extended: false}));
server.use(cors())
server.use(require('../src/rutas/usuario'))
server.use(require('../src/rutas/servicio'))
server.use(require('../src/rutas/empresa'))
server.use(require('../src/rutas/informacion'))
server.use(require('../src/rutas/registro/empresa'))
server.use(require('../src/rutas/login/empresa'))
server.use(require('../src/rutas/reportes/empresa'))
server.use(require('../src/rutas/plan/plan'))
server.use(require('../src/rutas/tecnico/tecnico'))

server.listen(port)
console.log('Servidor corriendo por el puerto ',port)