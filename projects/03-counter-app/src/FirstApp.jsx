// const getResult = () => {
//   return 'Hola Mundo!!'
// }

// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Mauricio'
// };

const FirstApp = ({title}) => {
  // console.log(props);
  return (
    <>
      <h1>{ title }</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <p>Soy un subtitulo</p>
    </>
  );
}

export {
  FirstApp as default,
}
