const {Router} = require('express')
const {crearCuenta, getSolicitudes, 
    crearSolicitud, veraceptados, buscaraceptados,
eliminarEmpresa, ver} = require('../../controlador/registro/empresa')
const router = Router()



router.post('/registro',crearCuenta);
router.get('/solicitud/:nombre_empresa',getSolicitudes)
router.get('/ver', ver)
router.post('/solicitud',crearSolicitud)
router.delete('/empresa/:idEmpresa',eliminarEmpresa)
router.get('/aceptados',veraceptados)
router.get('/aceptados/:nombre_empresa',buscaraceptados)

module.exports = router;