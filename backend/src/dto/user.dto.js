function validateUser(user) {
  const errors = [];
//Datos de usuario a utilizar
  if (!user.name) errors.push('El nombre es requerido');
  if (!user.email) errors.push('El email es requerido');
  if (!user.password) errors.push('La contraseña es requerida');

  return errors;
}

module.exports = { validateUser };