import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'

import{
    CLOUD,
    WINDY,
} from './../../constants/weathers'

const location= "Fuente Segura,ES";
const api_key= "f41e6efd25d304d6691b4bc1e8781d8e";
const url_base_weather= "api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

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
/* CÓDIGO EJEMPLO PROMISES */
/* 
    let promesa= new Promise((resolve, rejected)) => {
        setTimeout(() =>{
            resolve("Exito total!");
        },2000);
        });
    console.log("Ahora comienza");

    promesa.then((mensaje) => {

        console.log(mensaje);
        console.log("Acabado");
    }).catch((error) => {
        console.log(mensaje);
    });

    
} */
class WeatherLocation extends React.Component{

    constructor(){
        super();
        this.state={
            city:"Valencia",
            data: data,
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve =>{

            
            return resolve.json();
        }).then(data => {
            console.log(data);
            debugger;
        });

        this.setState({
        
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