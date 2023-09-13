const {verUser} = require('../controlador/usuario')
const {Router} = require('express')
const router = Router()

router.get('/usuarios',verUser)


module.exports = router;

