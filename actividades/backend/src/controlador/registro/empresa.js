const {p} = require('../../db/conexionLogin')
const bcrypt = require('bcryptjs');



const crearCuenta = async(req,res)=>{
const {ruc,email,telefono,
direccion,
nombre_empresa,
contacto,
ciudad,
password
} = req.body;
//const passencript = await bcrypt.hash(password,10);
const guarda = await p.query('insert into empresa(ruc,email,telefono,direccion,nombre_empresa,contacto,ciudad,password)values($1,$2,$3,$4,$5,$6,$7,$8)',[
    ruc,
    email,
    telefono,
    direccion,
    nombre_empresa,
    contacto,
    ciudad,
    password
])
res.json({
    message: 'Cliente creado sastifactoriamente'
}) 
}



getSolicitudes = async(req,res)=>{
const nombre_empresa = req.params.nombre_empresa; 
const respuesta = await p.query('select * from empresa where nombre_empresa like $1',[
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
    password
    } = req.body;
    const passencript = await bcrypt.hash(password,10);
    const guarda = await p.query('insert into copia(ruc,email,telefono,direccion,nombre_empresa,contacto,fecha_ingreso,ciudad,password)values($1,$2,$3,$4,$5,$6,$7,$8,$9)',[
        ruc,
        email,
        telefono,
        direccion,
        nombre_empresa,
        contacto,
        fecha_ingreso,
        ciudad,
        passencript
    ])
    res.json({
        message: 'Cliente aceptado'
    }) 
    }




        const eliminarEmpresa = async(req,res)=>{
            const idEmpresa = req.params.idEmpresa;
            const eliminacion = await p.query('delete from empresa where idEmpresa = $1',
            [
                idEmpresa
            ])
            res.json({
                body:{
                    message: 'solicitud eliminada correctamente'
                }
            })
            }

   
            
      getmpresas = async(req,res)=>{
          const respuesta = await p.query('select * from empresa')
          res.status(200).json(respuesta.rows)
      }      



module.exports = {
crearCuenta,
getSolicitudes,
crearSolicitud,
eliminarEmpresa,
getmpresas
}