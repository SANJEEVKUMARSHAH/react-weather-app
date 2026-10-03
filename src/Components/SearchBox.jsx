import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';

import React, { useState } from 'react';

const SearchBox = ({ updateinfo }) => {

    const [city, setcity] = useState("");
    const [error, seterror] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const ApI_KEY = "1031e82180981b48e6b9fba105594774";   // yOUR aPI

    const weatherinfo = async () => {

        let response = await fetch(
            `${API_URL}?q=${city}&appid=${ApI_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        let json_response = await response.json();

        console.log(json_response);

        let result = {
            City: json_response.name,
            temp: json_response.main.temp,
            humidity: json_response.main.humidity,
            pressure: json_response.main.pressure,
            feels_like: json_response.main.feels_like,
            temp_max: json_response.main.temp_max,
            temp_min: json_response.main.temp_min,
            sea_level: json_response.main.sea_level || "N/A",
            weather: json_response.weather[0].description,
        };

        console.log(result);

        return result;
    };

    const submitHandler = async (e) => {

        e.preventDefault();

        if (!city.trim()) {
            seterror(true);
            return;
        }

        try {
            seterror(false);

            let newinfo = await weatherinfo();

            updateinfo(newinfo);

            setcity("");

        } catch (err) {
            console.log(err);
            seterror(true);
        }
    };

    const eventChange = (e) => {
        setcity(e.target.value);
        seterror(false);
    };

    return (
        <div className='searchBox'>

            <h2>Search For City</h2>

            <form onSubmit={submitHandler}>

                <TextField
                    onChange={eventChange}
                    value={city}
                    label="City Name"
                    variant="outlined"
                    className='searchbox'
                />

                <br />
                <br />

                <Button
                    variant="contained"
                    type="submit"
                >
                    Search
                </Button>

                {error && (
                    <p style={{ textAlign: "center", color: "red" }}>
                        No Such City In Our API
                    </p>
                )}

            </form>

        </div>
    );
};

export default SearchBox;