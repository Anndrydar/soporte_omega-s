const {Router} = require('express')
const {crearCuenta, getSolicitudes, 
    crearSolicitud,
eliminarEmpresa} = require('../../controlador/registro/empresa')
const router = Router()



router.post('/registro',crearCuenta)
router.get('/solicitud/:nombre_empresa',getSolicitudes)
router.post('/solicitud',crearSolicitud)
router.delete('/empresa/:idEmpresa',eliminarEmpresa)

module.exports = router;