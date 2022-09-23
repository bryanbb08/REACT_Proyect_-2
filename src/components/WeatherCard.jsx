import React from 'react'

const WeatherCard = ({weather}) => {

    console.log(weather)

    return (
    <article className='card'>
        <h1>weather App ⛈🌦🌥🌤🌨</h1>
        <h2>{`${weather?.name}, "${weather?.sys.country}"`}</h2>
    </article>
    )
}

export default WeatherCard