const 
    axios = require( 'axios' ),
    argv = require( './config/yargs' ) .argv;

/** Al ejecutar: node app -d "Bogota Colombia" */
console .log( argv .direccion );    // Bogota Colombia

let encodedUrl = encodeURI( argv .direccion );      /** encodeURI() Reemplaza todos los caracteres excepto los siguientes con las secuencias de escape UTF-8 */

/** Promise: Petición get usando Axios e implementa la API https://www.geoapify.com/ */
axios .get( `http://api.geoapify.com/v1/geocode/search?text=${ encodedUrl }&limit=1&type=city&apiKey=9825d1acfb7948a683e77381150f8694` )
    .then( response => {
        //console .log( response );
        console .log( response .status );
        console .log( JSON .stringify( response .data, undefined, 2 ) );    /**  JSON .stringify: Convierte el Objeto en un String permitiendo ver toda la estructura de datos */
    })
    .catch( err => console .error( 'ERROR!!!', err ) );
