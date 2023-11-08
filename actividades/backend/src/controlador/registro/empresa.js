const {p} = require('../../db/conexionLogin')
const path = require('path');
const fs = require('fs')
const bcrypt = require('bcryptjs');



const crearCuenta = async (req, res) => {
    const {
      ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad, password
    } = req.body;
  
    const contrato = req.file; 
    const _contrato = contrato.filename;
  
    const guarda = await p.query(
      'INSERT INTO empresa (ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad, password, contrato) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [
        ruc, email, telefono, direccion, nombre_empresa, contacto, ciudad, password, _contrato
      ]
    );
  
    res.json({
      message: 'Cliente creado satisfactoriamente'
    });
  };



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

            const obtenerTodosLosDatosEmpresa = async (req, res) => {
              try {
                // Consulta todos los campos de la tabla empresa
                const datosEmpresa = await p.query('SELECT * FROM empresa');
            
                if (datosEmpresa.rows.length === 0) {
                  return res.status(404).json({ message: 'No se encontraron datos de empresas.' });
                }
            
                res.json({ empresa: datosEmpresa.rows });
              } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error al obtener los datos de la empresa.' });
              }
            };
            
            
            
            
           const ver = async(req,res)=> {
            const datosEmpresa = await p.query('SELECT * FROM empresa');
            res.status(200).json(datosEmpresa.rows)
            }
       



module.exports = {
crearCuenta,
getSolicitudes,
crearSolicitud,
eliminarEmpresa,
obtenerTodosLosDatosEmpresa,
ver
}