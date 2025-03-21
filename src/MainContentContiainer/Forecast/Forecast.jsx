import React, { useState, useContext, useEffect } from "react";
import styles from "./Forecast.module.css"
import { format } from "date-fns";
function Forecast({forecastDay}){

    function formateDate(){
        return format(forecastDay.date, "dd-MM")
    }

    function getDayOfWeek(){
        return format(forecastDay.date, "EE")
    }
    return(
        <section id={styles.forecastContainer}>
            {console.log(forecastDay)}
            <div>
                <h2>{getDayOfWeek()}</h2>
                <p>{formateDate()}</p>
            </div>
            <img id={styles.weatherPic} src={forecastDay.day.condition.icon}/>
            <div id={styles.xtraInfo}>
                <div id={styles.topX}>
                    <div>
                    <p>{forecastDay.day.maxtemp_c}°C</p>
                    <p id={styles.minTemp}>{forecastDay.day.mintemp_c}°C</p>
                </div> 
                <div>
                    <p>Sunrise: {forecastDay.astro.sunrise}</p>
                    <p>Sunset: {forecastDay.astro.sunset}</p>
                </div>
                </div>
                <aside id={styles.chanceOfRain}>
                    <p>Chances of rain: {forecastDay.day.daily_chance_of_rain}</p>
                </aside>
                
            </div>    
        </section>
    );
}

export default Forecast