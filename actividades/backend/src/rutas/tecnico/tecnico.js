const {Router} = require('express')
const {creartecnico} = require('../../controlador/tecnico/tecnico')
const router = Router()



router.post('/tecnicos',creartecnico)






module.exports = router