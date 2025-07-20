const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware para leer JSON
app.use(express.json());

// Usar rutas
app.use('/api/users', userRoutes);

// Puerto
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});