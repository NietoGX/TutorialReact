import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'

import{
    CLOUD,
} from './../../constants/weathers'

const data={
    temperature: 7,
    weatherState:CLOUD,
    humidity:10,
    wind: '10 m/s'
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={'Villarreal'}/>
        <WeatherData data={data}/>
        
    </div>
);


export default WeatherLocation;