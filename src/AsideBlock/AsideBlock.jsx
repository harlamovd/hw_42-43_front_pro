import './AsideBlock.css'
import SavedCities from "../SavedCities/SavedCities";
import SearchCity from "../SearchCity/SearchCity";
function AsideBlock ({setObjCreationWeather}) {

    return (
        <div className='aside_block'>
            <SearchCity setObjCreationWeather={setObjCreationWeather}/>
            <SavedCities />
        </div>
    );
}

export default AsideBlock
