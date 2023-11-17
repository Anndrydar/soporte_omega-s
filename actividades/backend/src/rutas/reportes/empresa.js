const {Router} = require('express')
const router = Router()
const {verReport} = require('../../controlador/reportes/empresa')

router.get('/periodo_empresa',verReport)

module.exports = router
