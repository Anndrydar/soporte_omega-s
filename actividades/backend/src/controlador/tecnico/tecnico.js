const {pool} = require('../../db/conexion')



const creartecnico = async(req,res)=>{
const {nombres,cedula,email,telefono,ciudad} = req.body;
const guardar = await pool.query('insert into tecnico(nombres,cedula,email,telefono,ciudad)values($1,$2,$3,$4,$5)',[
  nombres,
  cedula,
  email,
  telefono,
  ciudad  
])
res.json({
    message: 'tecnico creado sastifactoriamente',
    body:{
        tecnico: {nombres,cedula,telefono}
    }
})
}


vertecnicos = async(req,res)=>{
const response = await pool.query('select idTecnico,nombres,cedula,email,telefono,ciudad from tecnico')
res.status(200).json(response.rows)
}



buscartecnico = async(req,res) => {
    const idtecnico = req.params.idtecnico
    const response = await pool.query('select ')
}

module.exports = {
    creartecnico,
    vertecnicos
}