const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 55321155,
    lat: 14.3232,
    lng: 34.9241
  }
};

const persona2 = {...persona};

persona2.nombre = 'peter'

console.log(persona);
console.log(persona2)