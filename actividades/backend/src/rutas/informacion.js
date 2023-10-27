const {verRedes,verMision} = require('../controlador/informacion')
const {Router} = require('express')
const router = Router()



router.get('/informacion',verRedes)
router.get('/mision',verMision)

module.exports = router;