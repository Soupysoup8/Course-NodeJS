// el arrow function es el parametro callback
const getUsuarioByID = ( id, callback ) => {

    const usuario = {
        id,
        nombre:"Fernando"
    }

    //se define que se hará un callback al usuario
    setTimeout( () => {
        callback( usuario );
    }, 1500)

}

// la función de flecha es el callback
getUsuarioByID( 10, ( usuario ) => {
    console.log( "Hola mundo" );
})