import React, {useContext} from "react";
import styles from './MainWeather.module.css'
import {format} from "date-fns"
import { weatherContext } from "../MainComponent";
function MainWeather(){
    const {weather, setWeather} = useContext(weatherContext)
    let locationTitle = weather? weather.location.region + ', ' + weather.location.country :  "Location"
    let temp = weather ? weather.current.temp_c : "temp";
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
            <section className={styles.mainInfo}>
                <section className={styles.information}>
                    <h2>{locationTitle}</h2>
                    <h5>Chance of rain</h5>
                    <h2>{temp}°C</h2>
                </section>
                <section>
                    <img id={styles.weatherPicture} src = {weather.current.condition.icon}/>
                </section>  
            </section>
            }       
        </section>
    );
}
export default MainWeather