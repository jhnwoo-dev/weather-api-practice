import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function SearchBar({
    setTemp,
    setWind
}) {
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    function GetData(lat, long, cb) {
        let request = new XMLHttpRequest();
        const api_url = `https://api.open-meteo.com/v1/dwd-icon?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`

        request.open("GET", api_url);
        request.onload = function () {
            if (request.status === 200) {
                let data = JSON.parse(request.response)
                cb(data);
            } else {
                cb(new Error(`ERROR: ${request.status} - Please input valid latitude and longitude coordinates.`))
            }
        }
        request.send();
    }

    function callAPI() {
        GetData(lat, long, (data) => {
            console.log(data)
            setTemp(data.current_weather.temperature)
            setWind(data.current_weather.windspeed)
        });
    }

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>Latitude & Longitude</InputGroup.Text>
            <Form.Control aria-label="Latitude" id="latitude" type="number" value={lat} onChange={(e) => setLat(e.target.value)} />
            <Form.Control aria-label="Longitude" id="longitude" type="number" value={long} onChange={(e) => setLong(e.target.value)} />
            <Button variant="outline-secondary" id="button-addon2" onClick={callAPI}>
                Search
            </Button>
        </InputGroup>
    )
}
export default SearchBar;