import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
  test('debe retornar un objeto con clave y edad', () => {
    const claveTest = 'asdf';
    const edadTest = 20
    const {nombreClave, anios} = usContext({clave: claveTest, edad: edadTest});
    expect(nombreClave).toEqual(claveTest);
    expect(anios).toEqual(edadTest);
  });
});