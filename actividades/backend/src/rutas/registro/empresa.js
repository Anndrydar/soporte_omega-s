const {Router} = require('express')
const {crearCuenta, getSolicitudes, 
    crearSolicitud,
eliminarEmpresa, ver} = require('../../controlador/registro/empresa')
const router = Router()
const upload = require('../../../libs/storage')
const path = require('path')
const fs = require('fs')



router.post('/registro', upload.single('contrato'), crearCuenta);
router.get('/solicitud/:nombre_empresa',getSolicitudes)
router.get('/ver', ver)
router.post('/solicitud',crearSolicitud)
router.delete('/empresa/:idEmpresa',eliminarEmpresa)

router.get('/descargar-pdf/:contrato', (req, res) => {
    const contrato = req.params.contrato;
  
    // Construye la ruta completa al archivo PDF (ajusta esto según tu estructura de carpetas)
    const rutaAlPDF = path.join(__dirname, 'uploads', contrato);
  
    // Verifica si el archivo PDF existe
    if (fs.existsSync(rutaAlPDF)) {
      // Proporciona el archivo PDF como respuesta
      res.download(rutaAlPDF, nombreArchivo);
    } else {
      res.status(404).json({ message: 'El archivo PDF no existe.' });
    }
  });

module.exports = router;