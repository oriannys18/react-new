const persona = {
    nombre: 'Juan',
    edad: 25,
    direccion: {
        ciudad: 'Buenos Aires',
        pais: 'Argentina',
    }
};


const persona2 = { ...persona };
persona2.nombre = 'Carlos';

console.log(persona);
console.log(persona2);