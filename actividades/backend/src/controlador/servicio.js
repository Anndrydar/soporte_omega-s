const {pool} = require('../db/conexion')


//servicios
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
const respuesta = await pool.query('select c.descripcion as categoriadescripcion, s.descripcion,s.precio,s.duracion, t.nombres, t.telefono, t.ciudad from servicio s join tecnico t on t.idtecnico = s.idtecnico join categoria c on c.idcategoria = s.idcategoria where s.descripcion like $1',[
    descripcion + '%'
])
res.status(200).json(respuesta.rows);
}


const verServicios = async(req,res)=>{
const respuesta = await pool.query('select s.idservicio,s.idcategoria,s.idtecnico, s.descripcion, s.duracion, s.precio, c.descripcion as categoriadescripcion, t.nombres,t.telefono,t.ciudad from servicio s join categoria c on c.idcategoria = s.idcategoria join tecnico t on t.idtecnico = s.idtecnico ')
res.status(200).json(respuesta.rows);
}


const verservicio = async(req,res)=>{
const idservicio = req.params.idservicio
const response = await pool.query('select idservicio, idcategoria,idtecnico,descripcion,precio,duracion from servicio where idservicio = $1',[
    idservicio
])
res.status(200).json(response.rows)
}


editarservicio = async(req,res)=>{
    const idservicio = req.params.idservicio;
const {idcategoria,idtecnico,descripcion,precio,duracion} = req.body;
const edicion = await pool.query('update servicio set idcategoria = $1, idtecnico = $2, descripcion = $3, precio = $4, duracion = $5 where idservicio = $6',[
     idcategoria,
     idtecnico,
     descripcion,
     precio,
     duracion,
     idservicio
])
res.json({
    message:'Servicio actualizado sastifactoriamente'
})
}


eliminarservicio = async(req,res)=>{
const idservicio = req.params.idservicio;
const eliminar = await pool.query('delete from servicio where idservicio = $1',[
    idservicio
])
res.json({
    message: 'Servicio eliminado sastifactorimente'
})
}


//categorias
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
    const response = await pool.query('select idcategoria, descripcion from categoria where idcategoria = $1',[
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
    eliminarcategoria,
    verservicio,
    editarservicio,
    eliminarservicio
}