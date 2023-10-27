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
const passencript = await bcrypt.hash(password,10);
const guarda = await p.query('insert into empresa(ruc,email,telefono,direccion,nombre_empresa,contacto,ciudad,password)values($1,$2,$3,$4,$5,$6,$7,$8)',[
    ruc,
    email,
    telefono,
    direccion,
    nombre_empresa,
    contacto,
    ciudad,
    passencript
])
res.json({
    message: 'Cliente creado sastifactoriamente'
}) 
}


module.exports = {
crearCuenta
}