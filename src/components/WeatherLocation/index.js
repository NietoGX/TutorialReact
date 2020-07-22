import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'

import{
    CLOUD,
    WINDY,
} from './../../constants/weathers'

const data={
    temperature: 7,
    weatherState:CLOUD,
    humidity:10,
    wind: '10 m/s'
}
const data2={
    temperature: 17,
    weatherState:WINDY,
    humidity:99,
    wind: '10 m/s'
}

class WeatherLocation extends React.Component{

    constructor(){
        super();
        this.state={
            city:"Valencia",
            data: data,
        };
    }

    handleUpdateClick= () => {
        console.log(data2);
        this.setState({
            /* city: 'Fuente Segura', */
            data: data2,
        });
    }
    render(){
        const{city,data}= this.state;
        
        return(
        <div className="weatherLocationCont">
            <Location city={city}/>
            <WeatherData data={data}/>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);
        
    }
}
    



export default WeatherLocation;