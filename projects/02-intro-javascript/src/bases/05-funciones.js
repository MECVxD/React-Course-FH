const saludar = function(nombre) {
  return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Mauricio'))

console.log(saludar3('MAURICIO'))

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
  })

const user = getUser();
console.log(user)

const getUserActivo = (nombre) => ({
  uid: 'ABC567',
  username: nombre
});  

const usuarioActivo = getUserActivo('Mauricio');
console.log(usuarioActivo)

