import Weather from "./components/Weather";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <div>
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
