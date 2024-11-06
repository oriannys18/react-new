const nombre = 'Juan';
const apellido = 'Perez';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);


function saludar(nombre) {
  return('Hola ' + nombre);
}

console.log(`Este es un texto: ${saludar(nombre)}`);