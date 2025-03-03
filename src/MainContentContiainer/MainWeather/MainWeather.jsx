import React, {useContext} from "react";
import styles from './MainWeather.module.css'
import {format} from "date-fns"
import { weatherContext } from "../MainComponent";
function MainWeather(){
    const {weather, setWeather} = useContext(weatherContext)
    let locationTitle = weather? weather.location.name + ', ' + weather.location.country :  "Location"
    console.log(weather);

    function extractTimeSubstring() {
        let string = weather.location.localtime
        let pos = string.indexOf(':')
        return string.substring(pos -2, pos + 3 )
    }

    function extractDateSubString(){
        let string = weather.location.localtime
        return format(string.substring(0, 10), 'EE MM yyyy')
    }

    return (
        <section className={styles.mainWeather}>
            {!weather ? <p className={weather}>"No Information Found..."</p>:
           <>
           <section className={styles.mainWeatherInfo}>
                <section>
                <img id={styles.weatherPicture} src={weather.current.condition.icon}/>
                </section>
                <section>
                <p id={styles.date}>{extractDateSubString()}</p>
                <p id={styles.time}>{extractTimeSubstring()}</p>
                <h3 id={styles.location}>{locationTitle}</h3>                  
                </section>
                
           </section>             
             <p id={styles.temp}>{weather.current.temp_c}°C</p>
             <p>{weather.current.condition.text}</p>
             <p>Real Feel: {weather.current.feelslike_c}°C</p>
             <p>Humidity: {weather.current.humidity}%</p>
             <p>Wind: {weather.current.wind_kph} km/h ({weather.current.wind_dir})</p>
           </>          
            }
        </section>
    );
}
export default MainWeather