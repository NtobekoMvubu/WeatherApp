import React, {createContext, useEffect, useState} from "react";
import SearchComponent from '../MainContentContiainer/SearchComponent/SearchComponent.jsx';
import MainWeather from "./MainWeather/MainWeather.jsx";
import Forecast from "./Forecast/Forecast.jsx";
import styled from "styled-components";
export const weatherContext = createContext();


const Div = styled.div`
display: flex;
`

const ForecastContainer = styled.div`
width: 33%;
`

function MainContentContainer(){
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState([]);
    
    return (
        <main>
            <weatherContext.Provider value={{weather, setWeather, forecast, setForecast}}>
            <SearchComponent/>
            <Div>
                <MainWeather/>
                <ForecastContainer>
                    {forecast && forecast.length > 0 ? (
                        forecast.map((day, i)=>{
                             return <Forecast key={i} forecastDay={day}/>
                        })
                    ) : (<p>No Forecast Data available</p>)}
                </ForecastContainer>
            </Div>
            
            </weatherContext.Provider>
        </main>
    )
}
export default MainContentContainer