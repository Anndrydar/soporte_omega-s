const {verEmpresa,crearEmpresa,crearEnlaces,verEnlaces} = require('../controlador/empresa')
const {Router} = require('express')
const router = Router()


router.get('/empresa',verEmpresa);
router.post('/empresa',crearEmpresa);
router.post('/enlaces',crearEnlaces);
router.get('/enlaces',verEnlaces);

module.exports = router;