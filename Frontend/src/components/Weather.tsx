import { useState } from "react";
import axios, { isAxiosError } from "axios";
import { motion } from "framer-motion";
import { Sun, Cloud, CloudRain, CloudSnow, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { WeatherData } from "@/utils/types";

const API_KEY = "b81c80722af4a315f97bde15dd612ddc"; // Replace with your actual API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// | "/api/v1/weather"

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      setWeather(response.data);
    } catch (err) {
      if (isAxiosError(err))
        return setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (weatherMain: unknown) => {
    switch (weatherMain) {
      case "Clear":
        return <Sun className="w-16 h-16 text-yellow-400" />;
      case "Clouds":
        return <Cloud className="w-16 h-16 text-gray-400" />;
      case "Rain":
        return <CloudRain className="w-16 h-16 text-blue-400" />;
      case "Snow":
        return <CloudSnow className="w-16 h-16 text-blue-200" />;
      default:
        return <Wind className="w-16 h-16 text-gray-600" />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[10rem] h-fit bg-gradient-to-br  p-4">
      <Card className="w-full min-w-md bg-transparent text-white border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className="flex-grow"
            />
            <Button onClick={fetchWeather} disabled={loading}>
              {loading ? "Loading..." : "Search"}
            </Button>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-center mb-4"
            >
              {error}
            </motion.div>
          )}

          {weather && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4"
              >
                {getWeatherIcon(weather.weather[0].main)}
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
              <p className="text-4xl font-bold mb-4">
                {Math.round(weather.main.temp)}°C
              </p>
              <p className="text-lg">{weather.weather[0].description}</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Humidity</p>
                  <p>{weather.main.humidity}%</p>
                </div>
                <div>
                  <p className="font-semibold">Wind Speed</p>
                  <p>{weather.wind.speed} m/s</p>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Weather;
