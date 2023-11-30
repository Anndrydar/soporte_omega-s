const {buscarServicio,verServicios,crearservicio} = require('../controlador/servicio')
const {Router} = require('express')
const router = Router()

router.get('/servicio/:descripcion',buscarServicio);
router.get('/servicios',verServicios)
router.post('/servicios',crearservicio)

module.exports = router;