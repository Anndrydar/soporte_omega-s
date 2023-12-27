const {buscarServicio,verServicios,crearservicio,verservicio,
    editarservicio,eliminarservicio,
crearcategoria,vercategorias,vercategoria,editarcategoria,
eliminarcategoria
} = require('../controlador/servicio')
const {Router} = require('express')
const router = Router()

//servicios
router.get('/servicio/:descripcion',buscarServicio);
router.get('/servicios',verServicios)
router.post('/servicios',crearservicio)
router.put('/servicioup/:idservicio',editarservicio)
router.delete('/servicio/:idservicio',eliminarservicio)
router.get('/serviciobyid/:idservicio',verservicio)



//categorias
router.post('/categorias',crearcategoria)
router.get('/categorias',vercategorias)
router.get('/categoria/:idcategoria',vercategoria)
router.put('/categoria/:idcategoria',editarcategoria)
router.delete('/categoria/:idcategoria',eliminarcategoria)



module.exports = router;