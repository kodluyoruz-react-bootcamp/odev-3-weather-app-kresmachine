import { useContext } from "react"
import WeatherCard from "./WeatherCard";
import WeatherContext from "../contexts/WeatherContext";

function Weather() {
    const { city, setCity, error, weatherInfo, handleOnFormSubmit } = useContext(WeatherContext);

    function handleInputChange(e) {
        setCity(e.target.value);
    }

    return (
        <div>
            <section className="top-banner">
                <div className="container">
                    <h1 className="heading">Weather App</h1>
                    <form onSubmit={handleOnFormSubmit}>
                        <input type="text" value={city} onChange={handleInputChange} placeholder="Search for a city" autoFocus />
                        <button type="submit">SUBMIT</button>
                        <span className="msg">{error}</span>
                    </form>
                </div>
            </section>
            {!error && (
                <section className="ajax-section">
                    <div className="container">
                        <ul className="cities">
                            {weatherInfo && weatherInfo.daily.map((data, idx) =>
                                <WeatherCard
                                    weather={data}
                                    key={idx} isCurrentDay={idx === 0}
                                    day={idx} />)}
                        </ul>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Weather;