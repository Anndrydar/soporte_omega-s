const {Router} = require('express')
const {crearCuenta, getSolicitudes, 
    crearSolicitud, veraceptados, buscaraceptados,
eliminarEmpresa, ver, 
desactivarcliente, 
vercliente,
actualizarcliente} 
= 
require('../../controlador/registro/empresa')
const router = Router()



router.post('/registro',crearCuenta);
router.get('/solicitud/:nombre_empresa',getSolicitudes)
router.get('/ver', ver)
router.post('/solicitud',crearSolicitud)
router.delete('/empresa/:idEmpresa',eliminarEmpresa)
router.get('/aceptados',veraceptados)
router.get('/aceptados/:nombre_empresa',buscaraceptados)
router.delete('/aceptado/:idEmpresa',desactivarcliente)
router.get('/aceptado/:idEmpresa',vercliente)
router.put('/aceptado/:idEmpresa',actualizarcliente)




module.exports = router;