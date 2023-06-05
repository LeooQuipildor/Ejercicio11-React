import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo'
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';

function App() {
  return (
    <>
      <Titulo></Titulo>
      <hr />
      <Container className=''>
        <Formulario></Formulario>
        <hr />
        <ListaNoticias></ListaNoticias>
      </Container>
    </>
  )
}

export default App
