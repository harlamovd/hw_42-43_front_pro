import './WeatherBlock.css'
function WeatherBlock ({objCreationWeather}) {
    if (objCreationWeather && objCreationWeather.cod === 200) {
        let icon = `http://openweathermap.org/img/w/${objCreationWeather.weather[0].icon}.png`;
        return (
            <div className='weather_block'>
                <h2 className='weather_block__city'>
                    {objCreationWeather.name}
                </h2>

                <div className='weather_block__info_temp'>
                    <img className='weather_block__img' alt='Icon weather' src={icon}/>
                    <span className='weather_block__temp'> {objCreationWeather.main.temp} <sup> o </sup> </span>
                </div>
                <p className='weather_block__description'> {objCreationWeather.weather[0].description} </p>
                <p className='weather_block__indicators'> Atmospheric pressure:</p>
                <p className='weather_block__indicators_value'> {objCreationWeather.main.pressure} hPa </p>
                <p className='weather_block__indicators'> Humidity:</p>
                <p className='weather_block__indicators_value'> {objCreationWeather.main.humidity} % </p>
                <p className='weather_block__indicators'> Wind speed:</p>
                <p className='weather_block__indicators_value'> {objCreationWeather.wind.speed} meter/sec </p>
                <p className='weather_block__indicators'> Wind direction:</p>
                <p className='weather_block__indicators_value'> {objCreationWeather.wind.deg} <sup> o </sup> </p>
            </div>
        );
    } else if (objCreationWeather && objCreationWeather.message === '401') {
        return (
            <div className='error'> Error:
                <ul>
                    <li> You did not specify your API key in API request. </li>
                    <li> Your API key is not activated yet. Within the next couple of hours, it will be activated and ready to use.
                    </li>
                    <li> You are using wrong API key in API request. Please, check your right API key in personal account. </li>
                </ul>
            </div>);
    }else if (objCreationWeather && objCreationWeather.message === '404') {
        return (
            <div className='error'> Error: You can get this error when you specified the wrong city name,
                ZIP-code or city ID. For your reference, this list contains City name, City ID,
                Geographical coordinates of the city (lon, lat), Zoom, etc.

            </div>);
    } else if ( objCreationWeather && objCreationWeather.message === '429') {
        return (
            <div className='error'> Error: You can recieve this error in the following cases:
                If you have a Free plan of Professional subscriptions and make more than 60 API
                calls per minute (surpassing the limit of your subscription). To avoid this situation,
                please consider upgrading to a subscription plan that meets your needs or reduce the number
                of API calls in accordance with the limits.

            </div>);
    }

}
export default WeatherBlock
