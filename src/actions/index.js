import {api_key, url_base_forecast} from './../constants/api_url';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const  SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});


export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));


        return fetch(url_forecast).then(
            data=> (data.json())
        ).then(
            weather_data=> {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                //modificar el estado con el resultado de la promise
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    };
};
