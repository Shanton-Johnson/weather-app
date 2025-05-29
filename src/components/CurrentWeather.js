import React from "react";

function CurrentWeather({ weather }) {
    if (!weather) return null; // Prevent crashes

    return (
        <div className="weather-card">
            <h2>{weather.city || "Unknown Location"}</h2>
            <p className="temperature">{weather.temp ? `${weather.temp}°C` : "N/A"}</p>
            <p>{weather.condition || "No data available"}</p>
            <div className="weather-details">
                <p>Humidity: {weather.humidity ? `${weather.humidity}%` : "N/A"}</p>
                <p>Wind Speed: {weather.wind_speed ? `${weather.wind_speed} km/h` : "N/A"}</p>
            </div>
        </div>
    );
}

export default CurrentWeather;
