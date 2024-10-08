import { useState } from "react";
import "./SearchBar.css";
import { ChangeEvent } from "react";

interface WeatherData {
  name: string;
  main: {
      temp: number;
  };
  weather: {
      main: string;
      description: string;
  }[];
}

export default function SearchBar() {
    let [cityName, setCityName] = useState<string> ("");
    let [fetchedData, setFetchedData] = useState<WeatherData | null>(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCityName(event.target.value);
    };

    const handleClick = () => {
        if (cityName) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a3c3004500706958e6d49445d2d416f3&units=metric`
            )
                .then((response) => response.json())
                .then((data) => setFetchedData(data));
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search your city!"
                value={cityName}
                onChange={handleInputChange}
            />

            <button onClick={() => handleClick()}>Go</button>
            <p>{fetchedData && `City: ${fetchedData.name}`}</p>
            <p>{fetchedData && `Temperature: ${fetchedData.main.temp} ℃`}</p>
            <p>{fetchedData && `Conditions: ${fetchedData.weather[0].main}`}</p>
            <p>
                {fetchedData &&
                    `Conditions description: ${fetchedData.weather[0].description}`}
            </p>
        </>
    );
}
