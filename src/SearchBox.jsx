import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"

const apiKey = import.meta.env.VITE_API_BASE_APIKEY;


export default function SearchBox({ updateInfo }) {
    
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
   
    let getWeatherInfo = async () => {
        try {
            setErr(false); // Reset error state before fetching

           
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
                feelslike: jsonResponse.current.feelslike_c, 
                humidity: jsonResponse.current.humidity 
            };

            console.log(jsonResponse);
          
            return result;
    
        } catch (err) {
            setErr(true);
            return null; 
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
