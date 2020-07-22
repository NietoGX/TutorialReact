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
} from '../../../constants/weathers'
import './styles.css';

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
        return <WeatherIcons className="wicon" name={icon} size='2x'/>;
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size='2x'/>;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`} </span> 
<span className="temperatureType">{` Cº`}</span>
    </div>
);

WeatherTemperature.propTypes={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;