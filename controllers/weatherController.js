const axios = require( 'axios' );

const getWeatherByLatLng = async ( lat, lng ) => {
    let 
        data = false,
        api_key = '73083ce69cc77ea705c8f19db51ac73b',
        api_unit = 'metric'
        api_url = `https://api.openweathermap.org/data/2.5/weather`,      /** API https://www.opencagedata.com/ */
        request_url = `${ api_url }?lat=${ lat }&lon=${ lng }&units=${ api_unit }&appid=${ api_key }`; 
    
        response = await axios .get ( request_url );     /** Petición get usando Axios */

    console .group( 'Data OpenWeather' );
    console .log( ' > URL', request_url );
    
    if( response .status == 200 ) {

        // console .log( ' > Temperatura Actual', response .data .main .temp );
        // console .log( ' > Presion', response .data .main .pressure );
        // console .log( ' > Humedad', response .data .main .humidity );
        // console .log( ' > Temperatura Minima', response .data .main .temp_min );
        // console .log( ' > Temperatura Maxima', response .data .main .temp_max );

        data = { 
            temperatura: response .data .main .temp, 
            presion: response .data .main .pressure, 
            humedad: response .data .main .humidity, 
            temperatura_minima: response .data .main .temp_min, 
            temperatura_maxima: response .data .main .temp_max 
        }
    }

    console .groupEnd();

    return data;
}

module .exports = {
    getWeatherByLatLng
}
