const {pool} = require('../../db/conexion')
const bcrypt = require('bcryptjs');



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



getSolicitudes = async(req,res)=>{
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
    const passencript = await bcrypt.hash(password,10);
    const guarda = await pool.query('insert into copia(ruc,email,telefono,direccion,nombre_empresa,contacto,fecha_ingreso,ciudad,password,idplan)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',[
        ruc,
        email,
        telefono,
        direccion,
        nombre_empresa,
        contacto,
        fecha_ingreso,
        ciudad,
        passencript,
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
       



module.exports = {
crearCuenta,
getSolicitudes,
crearSolicitud,
eliminarEmpresa,
ver
}