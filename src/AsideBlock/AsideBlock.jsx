import './AsideBlock.css'
import SavedCities from "../SavedCities/SavedCities";
import SearchCity from "../SearchCity/SearchCity";
import {useState, useEffect} from "react";
import { getWeather } from '../components/helper';
import {localStorItem, updateLocalStorItem} from '../components/helper';

function AsideBlock ({setObjCreationWeather}) {
    const [savedCitiesArr, setSavedCitiesArr] = useState(JSON.parse(localStorage[localStorItem]));

    useEffect(()=>{
        updateLocalStorItem(savedCitiesArr);
    }, [savedCitiesArr]);

    async function getWeatherSavedCity (e) {
        const cityId = e.target.dataset.idCity;
        const result = await getWeather(cityId);
        setObjCreationWeather(result);
    }
    function addObjInSavedCitiesArr (obj){
        const copyArr = [... savedCitiesArr];
        if (copyArr.find(el => +el.id === obj.id)) {
            alert('Already saved')
        } else {
            const newObj = {
                name: obj.name,
                id: `${obj.id}`,
                country: obj.country
            }
            copyArr.push(newObj);
            setSavedCitiesArr(copyArr)
        }
    }

    return (
        <div className='aside_block'>
            <SearchCity setObjCreationWeather={setObjCreationWeather} addObjInSavedCitiesArr={addObjInSavedCitiesArr}/>
            <h2 className='saved_cities'>
                Your saved cities
            </h2>
            <div className='wrapper_save_button'>
            {savedCitiesArr?.map(el => (
                    <SavedCities key={el.id} cityData={el} getWeatherSavedCity={getWeatherSavedCity}/>
            ))
            }
            </div>

        </div>
    );
}

export default AsideBlock
