const fs = require('fs');
const colors = require('colors');

let data = ''
let hacemultiplicacion = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`)
    }
}

let listabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        resolve(hacemultiplicacion(base, limite));
    })
}

let creararchivo = (base, limite = 10) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Archivo creado tabla${colors.green(base)}.txt`);
        });

    });

}

module.exports = {
    creararchivo,
    listabla
}