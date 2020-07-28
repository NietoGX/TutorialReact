import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem'
import {url_base_forecast, api_key} from './../constants/api_url';
import transformForecast from './../services/transformForecast';


class ForecastExtended extends React.Component{
    

    constructor(){
        super();
        this.state={
            forecastData:null
        }
    }
    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentDidUpdate(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city =>{
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data=> (data.json())
        ).then(
            weather_data=> {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
    }
    
    renderForecastItemDays(forecastData){
        
        return forecastData.map(forecast=> 
            (<ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}
                ></ForecastItem>));
        
    }

    renderProgress = () => {
        return "Cargando pronostico extendido...";

    }


    render(){
        const {city} = this.props;
        const{forecastData} = this.state;
        console.log(`${forecastData} FORECASTDATA RENDER`)
        return (
            <div>
                <h2 className="forecastTitle">HOLA {city}</h2>
                
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string,
}

export default ForecastExtended;