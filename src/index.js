import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import GlobalStyle from './styles/globalStyle'
import Navbar from './sub'



ReactDOM.render(
  <>
    <Routes />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);


