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


const id = 3;

const getEmpleado = (id, callback) => {

    const empleado = empleados.find( e => e.id === id)?.nombre;

    if ( empleado ){
        callback( null, empleado );
    } else{
        callback(`Empleado con id ${id} no existe`);
    }

}

const getSalario = (id, callback) => {
    // si existe el salario (no devuelve null), te devuelve el salario
    // ?.salario (null check-operator)
    const salario = salarios.find( s => s.id === id)?.salario;

    if ( salario ){
        callback( null, salario );
    } else{
        callback(`Salario de empleado con id ${id} no existe`);
    }
}

getEmpleado(id, (err, empleado) => {

    if( err ){
        console.log("error")
        return console.log(err)
    }

    // para concatenar el salario con el nombre del empleado
    getSalario(id, ( err, salario ) => {
        
        if ( err ){
            return console.log(err);
        }

        console.log( "El empleado:", empleado, "tiene un salario de:", salario )
    })

})
