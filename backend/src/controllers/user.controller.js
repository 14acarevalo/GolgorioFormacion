const prisma = require('../prismaClient');

function validateUser(user) {
  const errors = [];

  if (!user.name) errors.push('El nombre es requerido');
  if (!user.email) errors.push('El email es requerido');
  if (!user.password) errors.push('La contraseña es requerida');

  return errors;
}

async function registerUser(req, res) {
  const { name, email, password } = req.body;
  const errors = validateUser({ name, email, password });

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const user = await prisma.user.create({
      data: { name, email, password }, 
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
}

module.exports = { registerUser, loginUser };