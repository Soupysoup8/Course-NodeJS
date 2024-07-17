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

/* Await = Término que dice le dice al programa que eventualmente
 llegará la respuesta, si o si tiene que estar en una función asincrona */


/*Siendo que es una función asincrona, si no le ponemos "throw", 
  nos devolvería lo primero que le aparece,
  pero al usar throw, nos devuelve que las cosas están bien, cuando
  no las notó en primer lugar, se podría decir que lo 
  intercepta para que se active el error */
const getInfoUsuario = async() => {

    try {
    
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de ${salario}`;

    } catch (error) {
        throw error;
    }

}

const id = 1;

getInfoUsuario()
    .then( msg => console.log(msg) )
    .catch( err => console.log(err))
