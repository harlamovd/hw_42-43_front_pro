import HeaderBlock from "../HeaderBlock/HeaderBlock";
import AsideBlock from "../AsideBlock/AsideBlock";
import WeatherBlock from "../WeatherBlock/WeatherBlock";
import './MainLayout.css';
import {useState} from "react";

function MainLayout () {
    const [objCreationWeather, setObjCreationWeather] = useState(null);

    function changeUseObjCreationWeather (object) {
        setObjCreationWeather(object);
    }

    return (
        <>
            < HeaderBlock />
            <main className='main_wrapper center'>
                < AsideBlock setObjCreationWeather={changeUseObjCreationWeather}/>
                <div className='content_block'>
                    <h1 className='content_block__title'>Actual weather from openweathermap.org </h1>
                    < WeatherBlock objCreationWeather={objCreationWeather}/>
                </div>
            </main>
        </>
    )

}
export default MainLayout