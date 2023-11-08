const {p} = require('../../db/conexionLogin')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const crearLogin = async(req,res)=>{
    const { email, password } = req.body;
    const response = await p.query('SELECT * FROM copia WHERE email = $1', 
    [
        email
    ]);
    
    if (response.rows.length === 0) {
      return res.json({ error: 'Usuario incorrecto' });
    }
  
    const passwordMatch = bcrypt.compareSync(password, response.rows[0].password);
    if (!passwordMatch) {
      return res.json({ error: 'Contraseña incorrecta' });
    }
  
    res.json({ success: 'Inicio de sesión exitoso',
               token: token(response),
               nombres: response.rows[0].nombre_empresa
});


}

function token(response){
    const payload = {
          usuario: response.email,
          nombres: response.nombre_empresa
    }
    return jwt.sign(payload, 'sistema omega web');
}


// Obtener el usuario autenticado
const getUsuario = async (req, res) => {
  const { email } = req;
  if (!email) {
    return res.status(404).json({ error: 'Usuario no ha iniciado sesión' });
  }
  res.json({
    usuario: usuario
  });
};



module.exports = {
    crearLogin,
    getUsuario
}
