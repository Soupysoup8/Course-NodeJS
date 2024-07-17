const argv = require("yargs")
            .option("b", {
                alias: "base",
                type:"number",
                demandOption: true,
                describe: "Es la base de la tabla de multiplicar"
            })
            
            .option("h", {
                alias: "hasta",
                type:"number",
                demandOption: true,
                default: 10,
                describe: "Hasta cuanto se multiplica"
            })

            .option("l", {
                alias: "listar",
                type:"boolean",
                demandOption: true,
                default: false,
                describe: "Muestra o no la tabla"
            })

            .check((argv, options) => {
                if( isNaN(argv.b)){
                    throw "La base tiene que ser un num";
                }
                return true;
            })
            .argv;

module.exports = argv;