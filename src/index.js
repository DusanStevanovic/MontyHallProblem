import React from 'react';
import ReactDom from 'react-dom';
import { Typography, CssBaseline } from '@material-ui/core';  
import Interface from './controller/Interface.controller';
import '@babel/polyfill';

const root = document.getElementById('root');

const App = () => (
  <>
    <CssBaseline />
    <Typography variant="h1" align="center">Monty Hall problem</Typography>
    <Interface />
  </>
);

ReactDom.render(<App />, root);
