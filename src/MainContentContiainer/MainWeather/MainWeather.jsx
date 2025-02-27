import React, {useContext} from "react";
import styles from './MainWeather.module.css'
import { weatherContext } from "../MainComponent";
function MainWeather(){
    const {weather, setWeather} = useContext(weatherContext)
    let locationTitle = weather? weather.location.name + ', ' + weather.location.country :  "Location"
    console.log(weather)
    return (
        <section className={styles.mainWeather}>
            {!weather ? "No Information Found...":
           <>
             <h3>{locationTitle}</h3>  
             <p>{ weather.location.localtime}</p>
             <img src={weather.current.condition.icon}/>
             <p>Temp: {weather.current.temp_c}°C</p>
             <p>Real Feel: {weather.current.feelslike_c}°C</p>
             <p>Humidity: {weather.current.humidity}%</p>
             <p>Wind: {weather.current.wind_kph} km/h ({weather.current.wind_dir})</p>
           </>          
            }


        </section>
    );
}
export default MainWeather