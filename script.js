async function getWeather() {
    let city = document.getElementById("cityInput").value;
    let apiKey = "20da423906ccf27bec8c2d81c8f4a2eb";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("weatherInfo").innerHTML = "⚠ City not found!";
            return;
        }

        let weather = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>🌤 Condition: ${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        `;

        document.getElementById("weatherInfo").innerHTML = weather;
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = "❌ Error fetching data!";
    }
}