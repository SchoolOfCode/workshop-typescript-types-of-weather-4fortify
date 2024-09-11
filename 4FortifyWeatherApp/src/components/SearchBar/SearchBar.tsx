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
                `https://seal-app-336e8.ondigitalocean.app/reviews?country=${postCode}`
            )
                .then((response) => response.json())
                .then((data) => setFetchedData(data));
        }
    }, [postCode]);

    return (
        <>
            <input type="text" placeholder="Search your city!" />
            <button onClick={() => handleClick("England")}>Go</button>
            {fetchedData && fetchedData.text}
        </>
    );
}
