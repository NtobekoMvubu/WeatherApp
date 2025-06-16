import React, {createContext, useEffect, useState} from "react";
import SearchComponent from '../MainContentContiainer/SearchComponent/SearchComponent.jsx';
import MainWeather from "./MainWeather/MainWeather.jsx";
import Forecast from "./Forecast/Forecast.jsx";
import Alert from "./Alerts/Alerts.jsx";
import styled from "styled-components";
import HourlyForecast from "./HourlyForecast/HourlyForecast.jsx";
export const weatherContext = createContext();
import './MainComponent.css'


const Div = styled.div`
display: flex;
`

const TodayWeather = styled.section`
width: 70%;
`
function MainContentContainer(){
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState([]);
    const [alert, setAlert] = useState([]);
    
    return (
        <main>
            <weatherContext.Provider value={{weather, setWeather, forecast, setForecast, alert, setAlert}}>
            <SearchComponent/>
            <Div>
                <TodayWeather>
                    <MainWeather/>
                    <section className="hourlyForecastContainer">
                        <secton>
                            <p id="hourForecast_label">Today's Forecast</p>
                        </secton>
                        <section className="hourlyContainer">
                        {                        
                        forecast && forecast.length > 0 ? (
                            forecast[0].hour.map((h, i) =>{
                                if (i >= 6 && (i % 3) === 0){
                                    return <HourlyForecast key={i} forecastHour={h}/>
                                }
                            })
                        ) : null
                    }
                        </section>
                    </section>

                </TodayWeather>
                <section className="ForecastContainer">
                    <p id="dayForecast_Label">3 Day Forecast</p>
                    {forecast && forecast.length > 0 ? (
                        forecast.map((day, i)=>{
                             return <Forecast key={i} forecastDay={day}/>
                        })
                    ) : (<p>No Forecast Data available</p>)}
                </section>
            </Div>
            
            </weatherContext.Provider>
        </main>
    )
}
export default MainContentContainer