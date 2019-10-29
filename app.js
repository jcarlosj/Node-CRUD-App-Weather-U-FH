const argv = require( './config/yargs' ) .argv;

/** Al ejecutar: node app -d "Bogota Colombia" */
console .log( argv .direccion );    // Bogota Colombia

