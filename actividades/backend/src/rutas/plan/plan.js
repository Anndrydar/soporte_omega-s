const {Router} = require('express')
const {crearplan,verplan} = require('../../controlador/plan/plan')
const router = Router()


router.post('/planes',crearplan)
router.get('/planes',verplan)

module.exports = router