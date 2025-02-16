import React, {useState, useEffect, useContext} from "react";
import { weatherContext } from "../MainComponent";
import styles from './SearchComponent.module.css'
function SearchComponent(){
    const [city, setCity] = useState("");
    const key = import.meta.env.VITE_APP_WEATHERKEY
    const {weather, setWeather} = useContext(weatherContext)


    function handleClick(){
        fetchCurrentWeather();
    }

    const fetchCurrentWeather = () =>{
        const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
         fetch(url)
        .then((resp)=> resp.json())
        .then(data =>{ 
            setWeather(w => data);
        } )
    }

    function handleCityChange(e){
        setCity(c => e.target.value)
    }
    return(
        <div className={styles.searchComponent}>
            <input id={styles.searchInput} type="text" onChange={handleCityChange} placeholder="Search a city"/>
            <button onClick={()=> handleClick()} >Search</button>
        </div>
    );
}
export default SearchComponent