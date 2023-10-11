const {Router} = require('express')
const router = Router()
const {crearLogin} = require('../../controlador/login/empresa')


router.post('/sesion',crearLogin);


module.exports = router;