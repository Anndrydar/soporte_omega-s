const {Router} = require('express')
const {creartecnico,vertecnicos} = require('../../controlador/tecnico/tecnico')
const router = Router()



router.post('/tecnicos',creartecnico)
router.get('/tecnicos',vertecnicos)






module.exports = router