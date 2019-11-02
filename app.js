const 
    argv = require( './config/yargs' ) .argv,
    place = require( './controllers/placeController' ),
    weather = require( './controllers/weatherController' );

/** Al ejecutar: node app -d "Bogota Colombia" */
console .log( argv .direccion );    // Bogota Colombia

let getInfo = async ( direccion ) => {
    let info_place = await place .getPlaceLatLng( direccion );
        info_weather = await weather .getWeatherByLatLng( info_place .latitud, info_place .longitud );
        
        return `El clima en la ciudad de ${ info_place .direccion } es de ${ info_weather .temperatura }°C`;
};

getInfo( argv .direccion )
    .then( msg => console .log( msg ) )
    .catch( err => console .log( err ) );