import React from 'react';
import ReactDom from 'react-dom';
import Interface from './controller/Interface.controller';

import '@babel/polyfill';

const root = document.getElementById('root');

const App = () => (
  <>
    <h1>Monty Hall problem</h1>
    <Interface />
  </>
);

ReactDom.render(<App />, root);
