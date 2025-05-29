import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "../styles.css"; // Import CSS file

function WeatherDashboard() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        if (!city.trim()) return;

        setError(null);
        setLoading(true);

        try {
            const response = await axios.get(`http://localhost:5000/weather/${city}`);
            setWeather(response.data);
        } catch (error) {
            setError("Failed to fetch weather data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="dashboard">
            <h1>Weather Dashboard</h1>
            <SearchBar setCity={setCity} fetchWeather={fetchWeather} />

            {error && <p className="error">{error}</p>}
            {loading && <p>Loading...</p>}

            {weather && (
                <>
                    <CurrentWeather weather={weather} />
                    {weather.forecast && <Forecast weather={weather} />}
                </>
            )}
        </div>
    );
}

export default WeatherDashboard;
