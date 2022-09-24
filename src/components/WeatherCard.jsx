import React from 'react'

const WeatherCard = ({weather}) => {

    console.log(weather)

    return (
    <article className='card'>
        <h1>weather App ⛈🌦🌥🌤🌨</h1>
        <h2>{`${weather?.name}, "${weather?.sys.country}"`}</h2>
        <section>
            <img src={weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`:""} alt="" />
            
        </section>
        <section>
            <h3>"{weather?.weather[0].description}"</h3>
            <ul>
                <li><strong>wind Speed</strong>{weather?.wind.speed}m/s</li>
                <li><strong>Clouds</strong>{weather?.clouds.all}%</li>
                <li><strong>Presure</strong>{weather?.main.pressure}hPa</li>
            </ul>
        </section>

        <h2>Tenperatura:</h2>
        <button></button>
    </article>
    )
}

export default WeatherCard