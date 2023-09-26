const {buscarServicio,verServicios} = require('../controlador/servicio')
const {Router} = require('express')
const router = Router()

router.get('/servicio/:descripcion',buscarServicio);
router.get('/servicios',verServicios)

module.exports = router;