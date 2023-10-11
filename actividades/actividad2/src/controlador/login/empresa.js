const {p} = require('../../db/conexion2')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const crearLogin = async(req,res)=>{
    const { email, password } = req.body;
    const response = await p.query('SELECT * FROM empresa WHERE email = $1', 
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
               token: token(response)
});


}

function token(response){
    const payload = {
          usuario: response.email,
          nombres: response.ruc
    }
    return jwt.sign(payload,'sistema omega web');
}


module.exports = {
    crearLogin
}
