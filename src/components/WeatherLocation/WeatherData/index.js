import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'

import {
    CLOUD, 
} from './../../../constants/weathers'
import './styles.css';



const WeatherData = ({data:{temperature,weatherState,humidity,wind}}) => {
    
    return(
    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={CLOUD}/>
        <WeatherExtraInfo humidity={humidity} wind={"10 m/s"}/>
    </div>
)};

export default WeatherData;