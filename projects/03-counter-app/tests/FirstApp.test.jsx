import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  // test('debe hacer match con el snapshot', () => {
  //   const {container} = render(<FirstApp />);
  //   expect(container).toMatchSnapshot();
  // });

  test('debe mostrar el titulo en un h1', () => {
    const title = 'Hola Mundo';
    const {container, getByText, getByTestId} = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('debe de mostrar el subitulo enviado por props', () => {
    const subTitle = 'Soy un subtitulo';
    const {getAllByText} = render(
      <FirstApp
        subTitle={subTitle}
      />
    );
    expect(getAllByText(subTitle).length).toBe(2);
  });
});