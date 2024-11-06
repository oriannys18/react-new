const saludar2 = (nombre) => {
    return `Hola, mi querido  ${nombre}`;
}

const saludar3 = (nombre) => `Hola, como estas ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Juan'));
console.log(saludar3('Carlos'));
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const getUsuarioActivo = (nombre) => ({

        uid: 'ABC567',
        username: 'nombre',
    });


const usuarioActivo = getUsuarioActivo('Juan');
console.log(usuarioActivo);