import './SavedCities.css'
function SavedCities ({cityData, getWeatherSavedCity}) {
    return(
        <button className='saved_cities'
                data-id-city={cityData.id}
                onClick={getWeatherSavedCity}>
            {cityData.name} / {cityData.country}
        </button>
    )
}
export default SavedCities