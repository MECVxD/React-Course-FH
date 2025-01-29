const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'IronMan',
  rango: 'Soldado'
}

const {nombre, edad, clave} = persona;

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const useContext = ({clave, nombre, edad, rango='Capitán'}) => {
  // console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1254,
      lng: -12.3545
    }
  }
}

const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);

console.log(nombreClave, anios)
console.log(lat , lng)