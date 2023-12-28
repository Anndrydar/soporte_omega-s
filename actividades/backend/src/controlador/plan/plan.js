const {pool} = require('../../db/conexion')


const crearplan = async(req,res)=>{
const {descripcion} = req.body;
const guardar = await pool.query('insert into planes(descripcion)values($1)',
[
    descripcion
])
res.json({
    message: 'Plan creado sastifactoriamente',
    body:{
        planes:{descripcion}
    }
})
}

const verplanes = async(req,res)=>{
const response = await pool.query('select idplan,descripcion from planes')
res.status(200).json(response.rows)
}

const verplan = async(req,res)=>{
const idplan = req.params.idplan
const response = await pool.query('select idplan,descripcion from planes where idplan = $1',[
    idplan
])
res.status(200).json(response.rows)
}


const editarplan = async(req,res)=>{
    const idplan = req.params.idplan
    const {descripcion} = req.body
    const update = await pool.query('update planes set descripcion = $1 where idplan = $2',[
        descripcion,idplan
    ])
    res.json({
        message: 'Plan actualizado sastifactoriamente'
    })
}


const eliminarplan = async(req,res)=>{
    const idplan = req.params.idplan
    const elimina = await pool.query('delete from planes where idplan = $1',[
        idplan
    ])
    res.json({
        message: 'Plan eliminado sastifactoriamente'
    })
}


module.exports = {
    crearplan,
    verplanes,
    verplan,
    editarplan,eliminarplan
}