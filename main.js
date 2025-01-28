const cityInput = document.getElementById('city');
const searchButton = document.querySelector('.dot');

const apiKey = 'ad8cbc4362b9d57c1dd95744657065e9'; // Reemplaza con tu clave API de OpenWeatherMap

searchButton.addEventListener('click', async () => {
    const city = cityInput.value.trim();

    if (!city) {
        alert('Por favor, introduce una ciudad válida.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Ciudad no encontrada');
        }

        const data = await response.json();
        displayWeather(data); // Llama a la función para mostrar los datos en el HTML
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

function displayWeather(data) {
    // Extrae datos relevantes del JSON
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const precipition =data.main.pressure;
    const windSpeed = data.wind.speed;
    const winddesc= data.wind.description;
    const weatherDescription = data.weather[0].description;

    // Actualiza los elementos del HTML con los datos obtenidos
    document.getElementById('tempera').textContent = `${temperature}°C`;
    document.getElementById('humi').textContent = `${humidity}%`;
    document.getElementById('prec').textContent=`${precipition}%`;
    document.getElementById('velo').textContent = `${windSpeed} m/s`;
    document.getElementById('calid').textContent = `${winddesc}`;
}
