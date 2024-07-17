const fs = require('fs');
const { resolve } = require('path');
var colors = require("colors")

const crearArchivo = async( base = 5, listar = false, hasta = 1) => {
    try{
        
        let salida = '';

        for ( let i = 1 ; i <= hasta; i++ ){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar){

            console.log("==============".rainbow);
            console.log(`  Tabla del ${base}`);
            console.log("==============".rainbow);

            console.log(salida);

        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return(`tabla-${base}.txt`);

    } catch( err ){
        throw err
    }
};

module.exports = {
    crearArchivo
};