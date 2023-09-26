const {pool} = require('../db/conexion')




const verEmpresa = async(req,res)=>{
const respuesta = await pool.query('select imagen_logo,nombre,imagen_home from nombres_empresa')
res.status(200).json(respuesta.rows);
}



module.exports = {
    verEmpresa
}