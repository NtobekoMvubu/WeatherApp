import { weatherContext } from "../MainComponent";
import { useContext, useOptimistic } from "react";
import './HourlyForecast.css'
function HourlyForecast({forecastHour}){

    const retrieveTime = () =>{
        console.log(forecastHour)
        let date = new Date(forecastHour.time_epoch * 1000)
        let hours = date.getHours();
        let mins = date.getMinutes();
        return `${hours}: ${mins < 10 ? '0' + mins: mins}`
    }

    return (
        <section className="HourlyForecastContainer">
           <p>{retrieveTime()}</p>
           <img src={forecastHour.condition.icon}/>
           <h2>{forecastHour.temp_c}°</h2>
        </section>
    )
}

export default HourlyForecast;