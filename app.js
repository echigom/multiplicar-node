const argv = require('./config/yargs').argv;
const { creararchivo, listabla } = require('./multiplicar/multiplicar')
const colors = require('colors');


let comando = argv._[0]

switch (comando) {
    case 'listar':
        listabla(argv.base, argv.limite)
            .then(mensaje => { console.log(mensaje); })
            .catch(err => { console.log(err); });
        break;
    case 'crear':
        creararchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`Archivo creado ${archivo}`); })
            .catch(err => { console.log(err); });
        break;
    default:
        console.log('no se reconoce el comando');
        break;

}
//console.log(argv.limite);

/*let parametro = argv[2];
let base = parametro.split('=')[1];*/