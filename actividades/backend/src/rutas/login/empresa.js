const {Router} = require('express')
const router = Router()
const {crearLogin,getUsuario} = require('../../controlador/login/empresa')
const validartoken = require('../../middleware/validar')

router.post('/sesion',crearLogin);
router.get('/usuario',validartoken,getUsuario);


module.exports = router;