import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    CLOUD, 
    CLOUDY,
    SUN,   
    RAIN,  
    SNOW,  
    WINDY, 
} from './../constants/weathers'

const icons={
    [CLOUD]: "day-sunny",
    [CLOUDY]: "day-fog",
    [SUN]:   "cloud",
    [RAIN]:  "cloudy",
    [SNOW]:  "rain",
    [WINDY]: "windy"
};

const getWeatherIcon= weatherState => {
    const icon= icons[weatherState];
    if(icon)
        return <WeatherIcons name={icon} size='2x'/>;
    else
        return <WeatherIcons name={"day-sunny"} size='2x'/>;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} Cº`}</span>
    </div>
);

WeatherTemperature.propTypes={
    temperature: PropTypes.number,
    weatherState: PropTypes.string,
}

export default WeatherTemperature;