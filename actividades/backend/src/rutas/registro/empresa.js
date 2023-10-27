const {Router} = require('express')
const {crearCuenta} = require('../../controlador/registro/empresa')
const router = Router()



router.post('/registro',crearCuenta)

module.exports = router;