const 
    argv = require( './config/yargs' ) .argv,
    place = require( './controllers/placeController' );

/** Al ejecutar: node app -d "Bogota Colombia" */
console .log( argv .direccion );    // Bogota Colombia

/** Promesa: Obtiene datos ciudad */
place .getPlaceLatLng( argv .direccion )
    .then( data => {
        console .log( data );
    })
    .catch( err => console .log( 'Error', err ) );

