const {pool} = require('../../db/conexion')



const crearCuenta = async (req, res) => {
    const {
      ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad, password, 
      idplan
    } = req.body;

  
    const guarda = await pool.query(
      'INSERT INTO empresa (ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad, password, idplan) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [
        ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad, password, idplan
      ]
    );
  
    res.json({
      message: 'Cliente creado satisfactoriamente'
    });
  };



const getSolicitudes = async(req,res)=>{
const nombre_empresa = req.params.nombre_empresa; 
const respuesta = await pool.query('SELECT * FROM planes p join empresa e on p.idplan = e.idplan where nombre_empresa like $1',[
    nombre_empresa + '%'
])
res.status(200).json(respuesta.rows);
}


const crearSolicitud = async(req,res)=>{
    const {ruc,email,telefono,
    direccion,
    nombre_empresa,
    contacto,
    fecha_ingreso,
    ciudad,
    password,
    idplan
    } = req.body;
    const guarda = await pool.query('insert into copia(ruc,email,telefono,direccion,nombre_empresa,contacto,fecha_ingreso,ciudad,password,idplan)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',[
        ruc,
        email,
        telefono,
        direccion,
        nombre_empresa,
        contacto,
        fecha_ingreso,
        ciudad,
        password,
        idplan
    ])
    res.json({
        message: 'Cliente aceptado'
    }) 
    }




        const eliminarEmpresa = async(req,res)=>{
            const idEmpresa = req.params.idEmpresa;
            const eliminacion = await pool.query('delete from empresa where idEmpresa = $1',
            [
                idEmpresa
            ])
            res.json({
                body:{
                    message: 'solicitud eliminada correctamente'
                }
            })
            }
            
            
            
            
           const ver = async(req,res)=> {
            const datosEmpresa = await pool.query('SELECT * FROM planes p join empresa e on p.idplan = e.idplan');
            res.status(200).json(datosEmpresa.rows)
            }
       
const veraceptados = async(req,res)=>{
  const response = await pool.query('select d.idEmpresa, d.ruc, d.email, d.telefono, d.direccion, d.nombre_empresa, d.contacto, d.ciudad, d.password, d.idplan,d.fecha_ingreso, p.descripcion from planes p join copia d on p.idplan = d.idplan')
  res.status(200).json(response.rows)
}

const buscaraceptados = async(req,res)=>{
  const nombre_empresa = req.params.nombre_empresa
  const response = await pool.query('select d.idEmpresa, d.ruc, d.email, d.telefono, d.direccion, d.nombre_empresa, d.contacto, d.ciudad, d.password, d.idplan,d.fecha_ingreso, p.descripcion from planes p join copia d on p.idplan = d.idplan where nombre_empresa like $1',[
    nombre_empresa + '%'
  ])
  res.status(200).json(response.rows)
}

const desactivarcliente = async(req,res)=>{
const idEmpresa = req.params.idEmpresa
const eliminar = await pool.query('delete from copia where idEmpresa = $1',[
  idEmpresa
])
res.json({
  message: 'Se desactivo el cliente sastifactoriamente'
})
}


const vercliente = async(req,res)=>{
  const idEmpresa = req.params.idEmpresa
  const response = await pool.query('select idEmpresa,ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad, password, idplan from copia where idEmpresa = $1',[
    idEmpresa
  ])
  res.status(200).json(response.rows)
}


const actualizarcliente = async(req,res)=>{
const idEmpresa = req.params.idEmpresa
const {ruc,email,telefono,direccion,nombre_empresa,
contacto,
ciudad,
password,
idplan} = req.body
const actualizar = await pool.query('update copia set ruc = $1, email = $2, telefono = $3, direccion = $4, nombre_empresa = $5, contacto = $6, ciudad = $7, password = $8, idplan = $9 where idEmpresa = $10',[
ruc,
email,
telefono,
direccion,
nombre_empresa,
contacto,ciudad,
password,
idplan,
idEmpresa
])
}

module.exports = {
crearCuenta,
getSolicitudes,
crearSolicitud,
eliminarEmpresa,
ver,
veraceptados,
buscaraceptados,
desactivarcliente,
vercliente,
actualizarcliente
}