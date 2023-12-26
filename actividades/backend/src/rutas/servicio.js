const {buscarServicio,verServicios,crearservicio,
crearcategoria,vercategorias,vercategoria,editarcategoria,
eliminarcategoria
} = require('../controlador/servicio')
const {Router} = require('express')
const router = Router()

router.get('/servicio/:descripcion',buscarServicio);
router.get('/servicios',verServicios)
router.post('/servicios',crearservicio)
router.post('/categorias',crearcategoria)
router.get('/categorias',vercategorias)
router.get('/categoria/:idcategoria',vercategoria)
router.put('/categoria/:idcategoria',editarcategoria)
router.delete('/categoria/:idcategoria',eliminarcategoria)




module.exports = router;