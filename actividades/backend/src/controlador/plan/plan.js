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

const verplan = async(req,res)=>{
const response = await pool.query('select * from planes')
res.status(200).json(response.rows)
}


module.exports = {
    crearplan,
    verplan
}