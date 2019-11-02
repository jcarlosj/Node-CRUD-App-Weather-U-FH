const 
    argv = require( './config/yargs' ) .argv,
    place = require( './controllers/placeController' ),
    weather = require( './controllers/weatherController' );

/** Al ejecutar: node app -d "Bogota Colombia" */
console .log( argv .direccion );    // Bogota Colombia

/** Promesa: Obtiene datos ciudad */
place .getPlaceLatLng( argv .direccion )
    .then( data => {
        console .log( data );
    })
    .catch( err => console .log( 'Error', err ) );

weather .getWeatherByLatLng( 3.4517923, -76.5324943 ) 
    .then( data => {
        console .log( 'Temperatura', data .temperatura );
    }) 
    .catch( err => console .log( 'Error', err ) );