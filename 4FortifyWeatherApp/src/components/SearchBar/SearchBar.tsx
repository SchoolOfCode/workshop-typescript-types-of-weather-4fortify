import { useState } from "react";
import "./SearchBar.css";
import { useEffect } from "react";

export default function SearchBar() {
    let [postCode, setPostCode] = useState("");
    let [fetchedData, setFetchedData] = useState(null);

    const handleClick = (postCode) => setPostCode(postCode);

    useEffect(() => {
        if (postCode) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a3c3004500706958e6d49445d2d416f3"
            )
                .then((response) => response.json())
                .then((data) => setFetchedData(data));
        }
    }, [postCode]);

    return (
        <>
            <input type="text" placeholder="Search your city!" />
            <button onClick={() => handleClick("England")}>Go</button>
            <p>{fetchedData && ...fetchedData.weather[0]}</p>
        </>
    );
}
