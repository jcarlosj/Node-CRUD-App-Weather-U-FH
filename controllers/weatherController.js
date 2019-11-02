const axios = require( 'axios' );

const getWeatherByLatLng = async ( lat, lng ) => {
    let 
        apiKey = '73083ce69cc77ea705c8f19db51ac73b',
        response = await axios .get ( `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ apiKey }` );     /** Petición get usando Axios e implementa la API https://openweathermap.org/ */

    console .log( 'Data OpenWeather', response .data .main );
    
    return { 
        temperatura: response .data .main .temp, 
        presion: response .data .main .pressure, 
        humedad: response .data .main .humidity, 
        temperatura_minima: response .data .main .temp_min, 
        temperatura_maxima: response .data .main .temp_max 
    };
}

module .exports = {
    getWeatherByLatLng
}
