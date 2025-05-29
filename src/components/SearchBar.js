import React, { useState } from "react";

function SearchBar({ setCity, fetchWeather }) {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (!input.trim()) return;
        setCity(input);
        fetchWeather();
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a city..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="search-btn" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
