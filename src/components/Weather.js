import { useState, useContext } from "react"
import WeatherCard from "./WeatherCard";
import WeatherContext from "../contexts/WeatherContext";
import { getDayName } from "../helpers";

const days = []

function Weather() {
    const { city, setCity, error, weatherInfo, handleOnFormSubmit } = useContext(WeatherContext);

    function handleInputChange(e) {
        setCity(e.target.value);
    }

    return (
        <div>
            <section class="top-banner">
                <div class="container">
                    <h1 class="heading">Weather App</h1>
                    <form onSubmit={handleOnFormSubmit}>
                        <input type="text" value={city} onChange={handleInputChange} placeholder="Search for a city" autofocus />
                        <button type="submit">SUBMIT</button>
                        <span class="msg">{error}</span>
                    </form>
                </div>
            </section>
            {!error && (
                <section class="ajax-section">
                    <div class="container">
                        <ul class="cities">
                            {weatherInfo && weatherInfo.daily.map((data, idx) =>
                                <WeatherCard
                                    weather={data}
                                    key={idx} isCurrentDay={idx == 0}
                                    day={idx} />)}
                        </ul>
                    </div>
                </section>
            )}
            <footer class="page-footer">
                <div class="container">
                    <small>
                        Made with <span>❤</span> by{" "}
                        <a href="http://georgemartsoukos.com/" target="_blank">
                            George Martsoukos
              </a>
                    </small>
                </div>
            </footer>
        </div>
    );
}

export default Weather;