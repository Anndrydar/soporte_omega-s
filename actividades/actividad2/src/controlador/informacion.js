const {pool} = require('../db/conexion')


const verRedes = async(req,res)=>{
const respuesta = await pool.query('select i.mision,i.vision, r.logo as img, r.nombre as social, r.url as link from informacion_empresa i join redSocial r on i.idInfo = r.idInfo')
res.status(200).json(respuesta.rows);
}

const verMision = async(req,res)=>{
const respuesta = await pool.query('select * from informacion_empresa')
res.status(200).json(respuesta.rows);
}

module.exports = {
    verRedes,
    verMision
}