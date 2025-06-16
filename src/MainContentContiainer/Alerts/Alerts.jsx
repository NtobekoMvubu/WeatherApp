import { useState, useContext, useEffect } from "react";
import { weatherContext } from "../MainComponent";
import './Alert.css'

function Alert(){
const {alert, setAlert} = useContext(weatherContext)


const latestAlert = alert.length > 0 ? alert[alert.length -1] : null;

return (
    <section id="mainContainer">
        {alert && alert.length === 0 ? <p>No Alerts Available...</p> :
        <section>
            <h2 id="alertHeader">ALERT!</h2>
            <h3>{latestAlert.headline}</h3>
            <ul>
                {latestAlert.desc.split('* ').map((desc, i) => {
                    return <li key={i}>{desc}</li>
                })}
            </ul>
        </section>

        }
    </section>
);
}

export default Alert