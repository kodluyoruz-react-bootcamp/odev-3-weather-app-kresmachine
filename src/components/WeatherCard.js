import {  getDayName } from "../helpers/index";

function WeatherCard({ weather, isCurrentDay, day }) {
    const date = new Date();
    date.setDate(date.getDate() + day);

    
    const image = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.weather[0].icon}.svg`
    return (
        <li className={`city ${isCurrentDay ? "current-weather" : ""}`}>
            <div className="city-name">
                <span>{getDayName(date)}</span>
            </div>
            <div className="city-temp">
                {weather.temp.day}<sup>°C</sup>
            </div>
            <div className="city-temp temp-max">
                max: {weather.temp.max}<sup>°C</sup>
            </div>
            <figure>
                <img alt="icon" className="city-icon" src={image} />
                <figcaption>{weather.weather[0].description}</figcaption>
            </figure>
        </li>
    );
}

export default WeatherCard;