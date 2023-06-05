import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo'
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';
import { useState, useEffect } from 'react';
import Noticia from './components/Noticia';

function App() {

  return (
    <>
      <Titulo></Titulo>
      <hr />
      <Container>
        <Formulario>
          <ListaNoticias></ListaNoticias>
        </Formulario>
        <hr />
      </Container>
    </>
  )
}

export default App
