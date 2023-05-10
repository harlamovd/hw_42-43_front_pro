import './SearchCity.css'
import {useRef, useState} from "react";
import cityList from '../cityList/city.list.json'
import getWeather from "../getWeather/getWeather";


function SearchCity ({setObjCreationWeather, addObjInSavedCitiesArr}){
    const city = useRef();
    const [datalistArr, setDatalistArr] = useState(false);

    function validationCityId () {
        const valueOnArr = city.current.value.split('/');
        const cityId = valueOnArr[valueOnArr.length -1].trim();
        if (!isNaN(cityId)) {
            return cityId
        } else {
            city.current.placeholder = 'Error: Сhoose from the list';
            city.current.value = '';
            return false
        }
    }
    async function handleClickSearchButton () {
        const cityId = validationCityId();
        if (cityId) {
            const result = await getWeather(cityId);
            setObjCreationWeather(result);
        }
    }
    function handleClickSavedCity (){
        const cityId = validationCityId();
        if (cityId) {
            const addObj = cityList.find(el => el.id === +cityId);
            addObjInSavedCitiesArr(addObj);
        }
    }

    function handleChangeInput (event) {
        const reg = new RegExp(`^${event.target.value.toLowerCase()}`, 'g');   // toLowerCase
        const arr = cityList.filter(el=> el.name.toLowerCase().match(reg));
        setDatalistArr(arr)
    }

    function RenderDatalist ({listArr}) {
        if (listArr) {
            return (
                <>
                    {listArr.map(el=>
                        <option
                            className='datalist_option'
                            key={el.id}
                            value={`${el.name} / ${el.state} ${el.country} / ${el.id}`} />
                    )}
                </>
            );
        }
    };
    return (
        <div className='search_city'>
            <label> Find a city
                <input ref={city} list='datalist_element' className='search_city__input' type='text' onChange={handleChangeInput}/>
                <datalist id='datalist_element'>
                    < RenderDatalist listArr={datalistArr} />
                </datalist>
                <button className='search_city__button' onClick={handleClickSearchButton}> Show Weather</button>
                <button className='search_city__button' onClick={handleClickSavedCity}>Saved City</button>
            </label>
        </div>
    )
}
export default SearchCity