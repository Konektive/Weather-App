import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=956d2e803cc0d3a4e443443211b01c76
`;

  const findCity = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setCity("");
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          placeholder="Enter City"
          onKeyPress={findCity}
          onChange={(event) => setCity(event.target.value)}
          value={city}
          type="text"
        />
      </div>
      {data.main ? (
        <div className="container">
          <div className="top">
            <p className="location">{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.main.temp.toFixed()}°C</h1>
            <p>{data.weather[0].main}</p>
          </div>
          <div className="description"></div>
          <div className="bottom">
            <div className="fells">
              <p>Feels Like</p>
              <p className="bold">{data.main.feels_like.toFixed()}°C</p>
            </div>
            <div className="humidity">
              <p>Humidity</p>
              <p className="bold">{data.main.humidity}%</p>
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              <p className="bold">{data.wind.speed.toFixed()} kph</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
