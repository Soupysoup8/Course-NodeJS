const empleados = [

    {
        id: 1,
        nombre: "Fernando"
    },

    {
        id: 2,
        nombre: "Meow"
    },
    {
        id: 3,
        nombre: "Pop"
    },
]

const salarios = [

    {
        id: 1,
        salario: 1000
    },

    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = (id) => {

    // resolve = callback cuando todo se hace correctamente
    // reject = callback cuando sucede un error
    return new Promise( ( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;

        //ternario (if simplificado)
        ( empleado )
            ? resolve( empleado )
            : reject( `No existe empleado con id ${id}` );

    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find( s => s.id === id )?.salario;

        (salario)
            ? resolve( salario )
            : reject(`No existe el salario del empleado con el id ${id}`)
    })
} 

const id = 5;

//(.then) Si existe el empleado mostrar cual es en la consola
//(.catch) Si no existe el empleado muestra el error
/*
getEmpleado(id)
    .then( empleado => console.log(empleado))
    .catch( err => console.log(err))

getSalario(id)
    .then( salario => console.log(salario))
    .catch( err => console.log(err))
*/

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id )
    })
    .then( salario => console.log( `El empleado ${nombre} tiene un salario de ${salario}`))
    .catch( err => console.log( err ))

    