const deadpool = {
    nombre: "wade",
    apellido: "Winston",
    poder: "regeneracion",
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

const { nombre, apellido, poder, edad = 0} = deadpool;


// Se imprimirá "Wade Winston Regeneración 0" 
console.log(nombre, apellido, poder, edad);