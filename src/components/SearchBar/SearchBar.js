import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

function SearchBar() {
    const [temp, setTemp] = useState(null)


    function GetData(lat, long) {
        let request = new XMLHttpRequest();

        const api_url = `https://api.open-meteo.com/v1/dwd-icon?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`

        request.open("GET", api_url);
        request.send();
        request.onload = () => {
            if (request.status === 200) {
                let data = JSON.parse(request.response);
                setTemp(data.current_weather.temperature)
            } else {
                alert(`ERROR: ${request.status}`)
            }
        }
    }

    const callAPI = () => {
        const lat = document.getElementById('latitude').value;
        const long = document.getElementById('longitude').value;
        GetData(lat, long);
    }

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text>Latitude & Longitude</InputGroup.Text>
                <Form.Control aria-label="Latitude" id="latitude" type="number" />
                <Form.Control aria-label="Longitude" id="longitude" type="number" />
                <Button variant="outline-secondary" id="button-addon2" onClick={callAPI}>
                    Search
                </Button>
            </InputGroup>

            <WeatherDisplay temp={temp} />
        </>
    )
}
export default SearchBar;