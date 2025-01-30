import PropTypes from 'prop-types';

// const getResult = () => {
//   return 'Hola Mundo!!'
// }

// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Mauricio'
// };

const FirstApp = ({ 
  title = 'No hay titulo',
  subTitle = 'No hay subtitulo',
  name='Mauricio Covarrubias'
}) => {
  // console.log(props);
  return (
    <>
      <h1>{ title }</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  );
}

FirstApp.propTypes = {
  name: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
}

export {
  FirstApp as default,
}
