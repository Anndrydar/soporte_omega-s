const {pool} = require('../db/conexion')



const crearEmpresa = async(req,res)=>{
  const {nombre,imagen_logo,imagen_home} = req.body;
  const insersion = await pool.query('insert into nombres_empresa(nombre,imagen_logo,imagen_home)values($1,$2,$3)',[
    nombre,
    imagen_logo,
    imagen_home
  ])
  res.json({
    message: 'Datos de la empresa guardados sastifactoriamente',
    body:{
      nombres_empresa:{nombre,imagen_logo,imagen_home}
    }
  })
}



const verEmpresa = async(req,res)=>{
const respuesta = await pool.query('select * from nombres_empresa order by fecha_hora asc limit 1')
res.status(200).json(respuesta.rows);
}




const crearEnlaces = async(req,res)=>{
const {idName,nombre,url} = req.body;
const guarda = await pool.query('insert into enlaces(idname,nombre,url)values($1,$2,$3)',[
  idName,
  nombre,
  url
])
res.json({
  message: 'Enlace creado sastifactoriamente',
  body:{
      enlaces:{nombre,url}
  }
})
}



const verEnlaces = async(req,res)=>{
const respuesta = await 
pool.query('select e.nombre, e.url from nombres_empresa n join enlaces e on  n.idname = e.idname')
res.status(200).json(respuesta.rows);
}




module.exports = {
    verEmpresa,
    crearEmpresa,
    crearEnlaces,
    verEnlaces
}