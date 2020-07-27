import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import { PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import './styles.css'


import{
    CLOUD,
    WINDY,
    SUN,
} from './../../constants/weathers'




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
    
    constructor(props){
        super(props);
        const {city} = props;
        this.state={
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();

    }

    componentDidUpdate(prevProps, prevState) {
        
    }
    

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });

        });

    }
    
    render(){
        const{city,data}= this.state;
        const {onWeatherLocationClick} = this.props;

        return(
        <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {data ? <WeatherData data={data}/> : <CircularProgress/>}
        </div>);
        
    }
}
    

WeatherLocation.propTypes= {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;