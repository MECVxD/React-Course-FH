import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import FirstApp from './FirstApp';
// import HelloWorldApp from './HelloWorldApp';
import CounterApp from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FirstApp subTitle='Soy un subtitulo'/> */}
    <CounterApp value={0} />
  </StrictMode>
);
