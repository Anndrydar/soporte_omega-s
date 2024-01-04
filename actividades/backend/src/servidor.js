const express = require('express')
const cors = require('cors')
const server = express()
const port = process.env.port || 1000 
server.use(express.json())
server.use(express.urlencoded({extended: false}));
server.use(cors())
//usuarios
server.use(require('../src/rutas/usuario'))
//servicios
server.use(require('../src/rutas/servicio'))
//productos
server.use(require('../src/rutas/empresa'))
//informaciones
server.use(require('../src/rutas/informacion'))
//empresas
server.use(require('../src/rutas/registro/empresa'))
//inicio de sesion
server.use(require('../src/rutas/login/empresa'))
//reporte para empresas
server.use(require('../src/rutas/reportes/empresa'))
//planes
server.use(require('../src/rutas/plan/plan'))
//tecnicos
server.use(require('../src/rutas/tecnico/tecnico'))
//desactivados
server.use(require('../src/rutas/registro/desactivado'))



server.listen(port)
console.log('Servidor corriendo por el puerto ',port)