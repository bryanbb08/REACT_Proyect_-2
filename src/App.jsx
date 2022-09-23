import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

const [coords, setCoords] = useState()
const [weather, setWeather] = useState()

useEffect(() => {
  const success = (pos) => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj);
  }
  navigator.geolocation.getCurrentPosition(success)
}, [])

console.log(coords)

// forma para hacer peticion a un api de navegador

useEffect (() => {
  if (coords) {
    const APIKEY = 'bd2da00459eaab2abbdeec6c1cea994a'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err))
  }
}, [coords])


  return (
    <div className="App">
      <WeatherCard weather={weather} />
    </div>
      
  )
}

export default App
