import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let getWeatherInfo = async () => {
        try {
            setErr(false); // Reset error state before fetching

            const apiKey = '453824d85b3a4fd5af6120935242808';
            let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            let jsonResponse = await response.json();
    
            let result = {
                city: jsonResponse.location.name,
                region: jsonResponse.location.region,
                country: jsonResponse.location.country,
                temp: jsonResponse.current.temp_c,
                feelslike: jsonResponse.current.feelslike_c, // Corrected path
                humidity: jsonResponse.current.humidity // Corrected path
            };

            console.log(jsonResponse);
            console.log(result);
            return result;
    
        } catch (err) {
            setErr(true);
            return null; // Return null if there's an error
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(city);
            let newInfo = await getWeatherInfo();
            if (newInfo) {
                updateInfo(newInfo); // Only update if newInfo is valid
            }
            setCity("");
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City name" 
                    variant="outlined"  
                    required 
                    value={city} 
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
       
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Search
                </Button>
                {err && <p style={{ color: "red" }}>No such place data available in our API</p>}
            </form>
        </div>
    );
}
