document.getElementById('search-btn').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if (city) {
        try {
            const response = await fetch(`http://localhost:5000/api/weather?city=${city}`);
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
});

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    if (data.error) {
        weatherInfo.innerHTML = `<p>${data.error.message}</p>`;
    } else {
        weatherInfo.innerHTML = `
            <p><strong>City:</strong> ${data.location.name}</p>
            <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
            <p><strong>Condition:</strong> ${data.current.condition.text}</p>
            <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
        `;
    }
}
