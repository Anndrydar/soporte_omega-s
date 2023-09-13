const {pool} = require('../db/conexion')



const verUser = async(req,res)=>{
const ver = await pool.query('select * from usuario')
res.status(402).json(ver.rows)
}



module.exports = {
    verUser
}
