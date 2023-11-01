const {Router} = require('express')
const {crearCuenta, getSolicitudes, 
    crearSolicitud,
eliminarEmpresa, getmpresas} = require('../../controlador/registro/empresa')
const router = Router()
const upload = require('../../../libs/storage')



router.post('/registro', upload.single('contrato'), crearCuenta);
router.get('/solicitud/:nombre_empresa',getSolicitudes)
router.get('/ver',getmpresas)
router.post('/solicitud',crearSolicitud)
router.delete('/empresa/:idEmpresa',eliminarEmpresa)

module.exports = router;