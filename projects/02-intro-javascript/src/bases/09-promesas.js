import { getHeroeById } from '../bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     // reject('No se pudo encontrar el héroe');
//   }, 2000)
// });

// promesa.then((heroe) => {
//   console.log(heroe);
//   console.log('then de la promesa');
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      }
      else {
        reject('No se pudo encontrar el héroe');
      }
    }, 2000)
  });
  return promesa;
}

getHeroeByIdAsync(1)
  .then( console.log )
  .catch( console.warn );