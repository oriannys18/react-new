//Desestructuracion de arreglos

const personajes = ['goku', 'vegeta', 'trunks' ];
const [, , p1] = personajes;

console.log (p1);


const retornaArreglos = () =>{
    return ['ABC', 123];

}

const [ letras, numeros ] = retornaArreglos();
console.log(letras, numeros);

//tarea
// 1. el primer valor se llamara nombre
// 2. se llamara setNombre
// lo que entiendo es que creo una rreglo que tiene un valor en la 
//posicion 1 y en la segunda posicion tien una funcion que retorna 
// un hola mundo, despues desestructuro ese arreglo y llamo a nombre y setnombre
//entre corchetes cuadrados el nombre y set nombre le digo = nombreclave
// le va a devolver un 'Goku' y lo muestro en un console.log y llamo
//para mostrar la funcion con el 'hola mundo'

const nombreClave = (valor) => {
    return [ valor, () => { console.log('Hola mundo') }];

}

const [nombre, setNombre] = nombreClave( 'Goku');
console.log( nombre );
setNombre();


