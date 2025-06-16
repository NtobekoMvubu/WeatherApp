import React, { useState, useContext, useEffect } from "react";
import styles from "./Forecast.module.css"
import { format } from "date-fns";
function Forecast({forecastDay}){   

    function getDayOfWeek(){
        return format(forecastDay.date, "EE")
    }
    return(
        <section id={styles.forecastContainer}>
            {console.log(forecastDay)}
            <div>
                <h2>{getDayOfWeek()}</h2>
            </div>
            <img id={styles.weatherPic} src={forecastDay.day.condition.icon}/>
            <div id={styles.temp}>
                <p>{forecastDay.day.maxtemp_c} /</p> 
                <p id={styles.minTemp}> {forecastDay.day.mintemp_c}</p>                
            </div>    
        </section>
    );
}

export default Forecast