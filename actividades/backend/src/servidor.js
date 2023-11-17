const express = require('express')
const path = require('path')
fs = require('fs')
const cors = require('cors')
const server = express()
const port = process.env.port || 1000 
server.use('/uploads', express.static(__dirname + '/uploads'));
server.use(express.json())
server.use(express.urlencoded({extended: false}));
server.use(cors())
server.use(express.static("./archivos"));
server.use(require('../src/rutas/usuario'))
server.use(require('../src/rutas/servicio'))
server.use(require('../src/rutas/empresa'))
server.use(require('../src/rutas/informacion'))
server.use(require('../src/rutas/registro/empresa'))
server.use(require('../src/rutas/login/empresa'))
server.use(require('../src/rutas/reportes/empresa'))


//ver pdf
server.get('/ver-pdf', function (req, res) {
    res.sendFile(__dirname + "/static/uploads/contrato-1699121080458-815797240.pdf");
    });


server.listen(port)
console.log('Servidor corriendo por el puerto ',port)