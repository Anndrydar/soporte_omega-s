const {pool} = require('../db/conexion')



const crearservicio = async(req,res)=>{
    const {idcategoria,idtecnico,descripcion,precio,duracion
    } = req.body;
    const guardar = await pool.query('insert into servicio(idcategoria,idtecnico,descripcion,precio,duracion)values($1,$2,$3,$4,$5)',[
        idcategoria,
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
const respuesta = await pool.query('select descripcion,precio,duracion,idcategoria,idServicio from servicio where descripcion like $1',[
    descripcion + '%'
])
res.status(200).json(respuesta.rows);
}


const verServicios = async(req,res)=>{
const respuesta = await pool.query('select * from servicio s join tecnico t on t.idtecnico = s.idtecnico')
res.status(200).json(respuesta.rows);
}



crearcategoria = async(req,res)=>{
const {descripcion} = req.body;
const guardar = await pool.query('insert into categoria(descripcion)values($1)',[
    descripcion
])
res.json({
    message: 'categoria creada',
    body:{
        servicio:{descripcion}
    }
})
}

vercategorias = async(req,res)=>{
    const response = await pool.query('select * from categoria')
    res.status(200).json(response.rows)
}


vercategoria = async(req,res)=>{
    const idcategoria = req.params.idcategoria;
    const response = await pool.query('select descripcion from categoria where idcategoria = $1',[
        idcategoria
    ])
    res.status(200).json(response.rows)
}


editarcategoria = async(req,res)=>{
    const idcategoria = req.params.idcategoria;
const {descripcion} = req.body;
const edicion = await pool.query('update categoria set descripcion = $1 where idcategoria = $2',[
     descripcion,
     idcategoria
])
res.json({
    message:'Categoria actualizada sastifactoriamente'
})
}


eliminarcategoria = async(req,res)=>{
const idcategoria = req.params.idcategoria;
const eliminar = await pool.query('delete from categoria where idcategoria = $1',[
    idcategoria
])
res.json({
    message: 'Categoria eliminada sastifactorimente'
})
}


module.exports = {
    buscarServicio,
    verServicios,
    crearservicio,
    crearcategoria,
    vercategorias,
    vercategoria,
    editarcategoria,
    eliminarcategoria
}