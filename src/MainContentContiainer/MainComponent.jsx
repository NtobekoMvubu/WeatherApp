import React, {createContext, useState} from "react";
import SearchComponent from '../MainContentContiainer/SearchComponent/SearchComponent.jsx';
export const weatherContext = createContext();
function MainContentContainer(){
    const [weather, setWeather] = useState()
    return (
        <main>
            <weatherContext.Provider value={{weather, setWeather}}>
            <SearchComponent/>
            </weatherContext.Provider>
        </main>
    )
}
export default MainContentContainer