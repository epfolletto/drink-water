import React from 'react';
import { Router } from './routes/Router';
import GlobalStyle from './styles/global';

export default function App() {

  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  );
}