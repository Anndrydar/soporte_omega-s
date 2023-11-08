const jwt = require('jsonwebtoken');

const validarToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó un token de autenticación' });
  }

  try {
    // Verifica el token y obtén el payload (usuario)
    const decoded = jwt.verify(token.replace('Bearer ', ''), 'sistema omega web');
    req.email = decoded.email;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token no válido' });
  }
};

module.exports = validarToken;
