import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    CLOUD,
    SUN,
    RAIN,
    DRIZZLE,
    SNOW,
    THUNDER,
} from '../../../constants/weathers'
import './styles.css';

const icons={
    [CLOUD]: "cloud",
    [THUNDER]: "day-thunderstorm",
    [SUN]:   "day-sunny",
    [RAIN]:  "cloudy",
    [SNOW]:  "rain",
    [DRIZZLE]: "day-showers"
};

const getWeatherIcon= weatherState => {
    const icon= icons[weatherState];
    console.log(icon);
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size='3x'/>;
    else
        return <WeatherIcons className="wicon" name={"CLOUD"} size='2x'/>;
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