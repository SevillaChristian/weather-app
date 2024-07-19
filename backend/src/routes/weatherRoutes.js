const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Ruta para obtener el clima
router.get('/', weatherController.getWeather);

module.exports = router;
