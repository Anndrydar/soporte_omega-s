const {pool} = require('../../db/conexion')



const creardesactivado = async (req, res) => {
    const {
      ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad, password, 
      idplan
    } = req.body;

    const guarda = await pool.query(
      'INSERT INTO desactivado(ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad, password, idplan) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [
        ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad,password, idplan
      ]
    );
  
    res.json({
      message: 'Cliente creado satisfactoriamente'
    });
  };



  const mostrardesactivados = async(req,res )=>{
  const response = await pool.query('select d.idEmpresa, d.ruc, d.email, d.telefono, d.direccion, d.nombre_empresa, d.contacto, d.ciudad, d.password, d.idplan,d.fecha_ingreso, p.descripcion from planes p join desactivado d on p.idplan = d.idplan')
  res.status(200).json(response.rows)
  }



  const activarcliente = async(req,res) =>{
  const idEmpresa = req.params.idEmpresa
  const eliminar = await pool.query('delete from desactivado where idEmpresa = $1',[
    idEmpresa
  ])
  res.json({
    message: 'Se activo el cliente sastifactoriamente'
  })
  }



  const buscardesactivados = async(req,res)=>{
    const nombre_empresa = req.params.nombre_empresa
    const response = await pool.query('select d.idEmpresa, d.ruc, d.email, d.telefono, d.direccion, d.nombre_empresa, d.contacto, d.ciudad, d.password, d.idplan,d.fecha_ingreso, p.descripcion from planes p join desactivado d on p.idplan = d.idplan where d.nombre_empresa like $1',[
      nombre_empresa + '%'
    ])
    res.status(200).json(response.rows)
  }

  

  module.exports = {
    creardesactivado,
    mostrardesactivados,
    activarcliente,
    buscardesactivados
  }