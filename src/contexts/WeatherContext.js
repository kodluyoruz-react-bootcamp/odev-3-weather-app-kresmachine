import { createContext, useState, useEffect } from "react";
import axios from "axios";

import cities from "../cities";

const API_URL = "https://api.openweathermap.org/data/2.5/onecall?units=metric&lang=tr&";
const API_KEY = "1a699a1fe52fa1bdd43f7e7641bc739e";
const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState("izmir");
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [error, setError] = useState(null);

    const values = {
        city,
        error,
        setCity,
        weatherInfo,
        handleOnFormSubmit
    };

    function fetchWeather(cityInfo) {
        axios.get(`${API_URL}lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&appid=${API_KEY}`)
            .then(response => {
                setWeatherInfo(response.data);
            })
            .catch(err => {
                console.log(err);
                setError("bir şeyler yolunda gitmedi...")
            });
    }

    async function handleOnFormSubmit(e) {
        e.preventDefault();
        setError(null);
        setWeatherInfo(null);

        if (city.trim() === "") {
            return;
        }
        const cityInfo = cities.find(function (cInfo) {
            return cInfo.name === city.trim().toLowerCase();
        });

        if (cityInfo === undefined) {
            setError("Böyle bir şehir yok :(");
            return;
        }

        fetchWeather(cityInfo);
    }

    useEffect(() => {
        const izmirInfo = cities.find(c => {
            return c.name === "izmir";
        });
        fetchWeather(izmirInfo);
    }, [])
    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    );
};

export default WeatherContext;