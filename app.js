const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true

        }
    })
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');


//console.log(process.argv);
let argv2 = process.argv;

console.log(argv);
console.log(argv2);


// let parametro = argv[2];
// let base = parametro.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));