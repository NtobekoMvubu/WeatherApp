import React, {createContext, useState} from "react";
import SearchComponent from '../MainContentContiainer/SearchComponent/SearchComponent.jsx';
import MainWeather from "./MainWeather/MainWeather.jsx";
export const weatherContext = createContext();
function MainContentContainer(){
    const [weather, setWeather] = useState()
    return (
        <main>
            <weatherContext.Provider value={{weather, setWeather}}>
            <SearchComponent/>
            <MainWeather/>
            </weatherContext.Provider>
        </main>
    )
}
export default MainContentContainer