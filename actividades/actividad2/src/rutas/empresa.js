const {verEmpresa} = require('../controlador/empresa')
const {Router} = require('express')
const router = Router()



router.get('/empresa',verEmpresa);


module.exports = router;