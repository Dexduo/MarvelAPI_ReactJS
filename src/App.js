import React from 'react';
import './App.css';

import Header from './components/header'
import Characters from './components/charactersList'

function App() {
  return (
    //O HEADER É ONDE FICA O "TITULO" DA MARVEL
    //O CHARACTERS É ONDE FICAM AS BOXS QUE SÃO OS PERSONAGENS COM IMAGEM E NOME
    <div>
      <Header />
      <Characters />
    </div>
  )
}

export default App;
