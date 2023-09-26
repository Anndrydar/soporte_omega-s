const {pool} = require('../db/conexion')



const buscarServicio= async(req,res)=>{
const descripcion = req.params.descripcion;
const respuesta = await pool.query('select descripcion,precio,duracion from servicio where descripcion like $1',[
    descripcion + '%'
])
res.status(200).json(respuesta.rows);
}


const verServicios = async(req,res)=>{
const respuesta = await pool.query('select descripcion,precio,duracion from servicio')
res.status(200).json(respuesta.rows);
}


module.exports = {
    buscarServicio,
    verServicios
}