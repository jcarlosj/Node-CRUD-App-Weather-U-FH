const axios = require( 'axios' );

const getPlaceLatLng = async ( direccion ) => {
    let 
        encodedUrl = encodeURI( direccion ),      /** encodeURI() Reemplaza todos los caracteres excepto los siguientes con las secuencias de escape UTF-8 */
        /** Promise: Petición get usando Axios e implementa la API https://www.geoapify.com/ */
        response = await axios .get( `http://api.geoapify.com/v1/geocode/search?text=${ encodedUrl }&limit=1&type=city&apiKey=9825d1acfb7948a683e77381150f8694` );

        if( response .data .features .length === 0 ) {
            throw new Error( `No hay resultados para la ciudad ${ encodedUrl }` );
        }
            
        let location = response .data .features[ 0 ];

        return {
            direccion: `${ location .properties. country }, ${ location .properties. state }, ${ location .properties. name }`,
            latitud: location .properties .lat,
            longitud: location .properties .lon
        }      
} 

module .exports = {
    getPlaceLatLng
}