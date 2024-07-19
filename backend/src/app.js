require('dotenv').config(); // Asegúrate de requerir dotenv al inicio

const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const app = express();
const weatherRoutes = require('./routes/weatherRoutes'); // Asegúrate de que esta ruta sea correcta

app.use(cors()); // Habilita CORS para permitir solicitudes desde el frontend
app.use(express.json());

// Ruta base para el servicio de clima
app.use('/api/weather', weatherRoutes);

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
