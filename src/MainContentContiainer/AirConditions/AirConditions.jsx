import { useState, useContext } from "react";
import { weatherContext } from "../MainComponent";
import ConditionDetail from "./ConditionDetail/ConditionDetail.jsx"
import { WiThermometer, WiStrongWind, WiDaySunny, WiRaindrop } from "react-icons/wi";
import "./AirConditions.css"



function AirConditions(){
    const {weather, setWeather} = useContext(weatherContext);
    const {forecast, setforecast} = useContext(weatherContext);
    console.log(forecast[0]?.day.daily_chance_of_rain);
    const tempFormat =  weather?.current.feelslike_c + "°C" || null;
    const windFormat = weather?.current?.wind_kph + "km/h" || null;
    const chanceofRainFormat = forecast[0]?.day?.daily_chance_of_rain + "%" || null
    const uvFormat = weather?.current?.uv || 0;
    const tempIcon = () => {
        return <WiThermometer size={50} color="white"/>
    }
    const windIcon = () => {
        return <WiStrongWind size={50} color="white"/>
    }
    const uvIcon = () => {
        return <WiDaySunny size={50} color="white"/>
    }
    const dropIcon = () => {
        return <WiRaindrop size={50} color="white"/>
    }
    return (
        <section className="">
            <h4>Air Conditions</h4>
        <section className="air-metrics">
            <section className="air-metric-row">
                <ConditionDetail title = "Real Feel" value = {tempFormat} icon={tempIcon}/>
                <ConditionDetail title = "Wind" value = {windFormat} icon={windIcon}/>
            </section>
            <section className="air-metric-row">
                <ConditionDetail title = "Chance of Rain" value = {chanceofRainFormat} icon={dropIcon}/>
                <ConditionDetail title = "UV Index" value = {uvFormat} icon={uvIcon}/>
            </section>
        </section>
        </section>
    );
}
export default AirConditions;