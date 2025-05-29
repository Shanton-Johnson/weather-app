import React from "react";

function Forecast({ weather }) {
    if (!weather || !weather.forecast) return null; // Prevent crashes

    return (
        <div className="forecast">
            <h3>Hourly Forecast:</h3>
            <div className="forecast-cards">
                {weather.forecast.map((hour, index) => (
                    <div key={index} className="forecast-card">
                        <p>{hour.time}</p>
                        <p className="forecast-icon">{hour.icon}</p>
                        <p>{hour.temp}°C</p>
                        <p>{hour.wind} km/h</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;
