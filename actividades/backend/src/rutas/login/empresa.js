const {Router} = require('express')
const router = Router()
const {crearLogin,getUsuario} = require('../../controlador/login/empresa')

router.post('/sesion',crearLogin);
router.get('/usuario',getUsuario);


module.exports = router;