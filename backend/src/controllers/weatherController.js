const axios = require('axios');

exports.getWeather = async (req, res) => {
  const { city } = req.query;
  if (!city) {
    return res.status(400).json({ message: 'City is required' });
  }
  
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: city
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error); // Agregar este log para más detalles del error
    res.status(500).json({ message: 'Error fetching weather data' });
  }
};
