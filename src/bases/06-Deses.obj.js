//Desestructuracion

const persona = {
    nombre: 'Juan',
    edad: 25,
    clave: 'jose',
    rango: 'Capitan',
    altura: {
        lat: 14.123123,
        lng: -12.3232,
    }
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const como = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        altura: {  
        longitud: -12.3232,
        ancho: 50.81
        }
    };
};

const { nombreClave, anios, altura:{ longitud, ancho} } = como(persona);

console.log(nombreClave, anios);
console.log(longitud, ancho);
