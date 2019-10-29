const 
    axios = require( 'axios' ),
    argv = require( './config/yargs' ) .argv;

/** Al ejecutar: node app -d "Bogota Colombia" */
console .log( argv .direccion );    // Bogota Colombia

let encodedUrl = encodeURI( argv .direccion );      /** encodeURI() Reemplaza todos los caracteres excepto los siguientes con las secuencias de escape UTF-8 */

/** Promise: Petición get usando Axios e implementa la API https://www.geoapify.com/ */
axios .get( `http://api.geoapify.com/v1/geocode/search?text=${ encodedUrl }&limit=1&type=city&apiKey=9825d1acfb7948a683e77381150f8694` )
    .then( response => {
        let location = response .data .features[ 0 ],
            format_address = `${ location .properties. country }, ${ location .properties. state }, ${ location .properties. name }`;
        
        console .group( 'Ubicacion', format_address );
        console .log( 'Latitud', location .properties .lat );
        console .log( 'Longitud', location .properties .lon );
        console .groupEnd();

    })
    .catch( err => console .error( 'ERROR!!!', err ) );
