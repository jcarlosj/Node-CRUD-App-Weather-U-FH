const axios = require( 'axios' );

const getPlaceLatLng = async ( direccion ) => {
    let 
        data = false,
        name_place = encodeURI( direccion ),      /** encodeURI() Reemplaza todos los caracteres excepto los siguientes con las secuencias de escape UTF-8 */
        api_key = '9e9016821f034b8e98c65f3b509c44e5',
        api_url = `https://api.opencagedata.com/geocode/v1/json`,      /** API https://www.opencagedata.com/ */
        request_url = `${ api_url }?key=${ api_key }&q=${ name_place }`; 
        
        response = await axios .get( request_url );      /** Petición get usando Axios */

        console .group( 'Data OpencageData > URL', request_url );

        if( response .status == 200 ) {
            // console .log( 'results', response .data .results );

            if ( response .data .results .length > 0 ) {
                let place = response .data .results[ 0 ];

                // console .log( ' > Formato', place .formatted );
                // console .log( ' > Posicion', place .geometry );
                // console .log( ' > Zona Horaria', place .annotations .timezone .name );

                data = {
                    direccion: place .formatted,
                    latitud: place .geometry .lat,
                    longitud: place .geometry .lng,
                    zona: place .annotations .timezone .name
                }
            }
            else if ( response .data .status .code == 402 ) {
                console .log( 'hit free-trial daily limit' );
                console .log( 'become a customer: https://opencagedata.com/pricing' ); 
            } 
            // else {
            //     // other possible response codes:
            //     // https://opencagedata.com/api#codes
            //     console .log( 'error', response .data .status .message );
            // }
        }

        console .groupEnd();

        return data;
} 

module .exports = {
    getPlaceLatLng
}