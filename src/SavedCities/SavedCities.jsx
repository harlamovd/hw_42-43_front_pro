import './SavedCities.css'
function SavedCities ({arr, getWeatherSavedCity}) {

    function handleClick (e) {
        console.log(e)
    }
    return(
        <button className='saved_cities' data-id-city={arr.id} onClick={getWeatherSavedCity}> {arr.name} / {arr.country}
        </button>
    )
}
export default SavedCities