const {pool} = require('../db/conexion')



const crearservicio = async(req,res)=>{
    const {idtecnico,descripcion,precio,duracion} = req.body;
    const guardar = await pool.query('insert into servicio(idtecnico,descripcion,precio,duracion)values($1,$2,$3,$4)',[
        idtecnico,
        descripcion,
        precio,
        duracion
    ])
    res.json({
        message: 'servicio creado',
        body:{
            servicio:{descripcion,precio,duracion}
        }
    })
}


const buscarServicio= async(req,res)=>{
const descripcion = req.params.descripcion;
const respuesta = await pool.query('select * from servicio s join tecnico t on t.idtecnico = s.idtecnico where s.descripcion like $1',[
    descripcion + '%'
])
res.status(200).json(respuesta.rows);
}


const verServicios = async(req,res)=>{
const respuesta = await pool.query('select * from servicio s join tecnico t on t.idtecnico = s.idtecnico')
res.status(200).json(respuesta.rows);
}


module.exports = {
    buscarServicio,
    verServicios,
    crearservicio
}