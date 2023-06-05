import React from 'react';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ListaNoticias from './ListaNoticias';


const Formulario = () => {

  const[noticias , setNoticias] = useState([])
  const[categoria, setCategoria] = useState('');


  useEffect(() => {
        if (noticias.length === 0) {
            consultarAPI();
          }
          setNoticias([])
    },[categoria])


    const consultarAPI = async () => {
        try {
            if(categoria !== ``){
              const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=pub_240398c9ee87ac43d842af1dbedb04da3527b&category=${categoria}`)
              const dato = await respuesta.json()
              setNoticias(...noticias,dato.results)
              console.log(dato.results)
              }
            }
        catch (error) {
        }    
    }

    

    return (
        <div>
            <p>Buscar por categoria:</p>
            <Form.Select className="" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
            <option value=''>Opciones</option>
            <option value="top">Tendencias</option>
            <option value="technology">Tecnologia</option>
            <option value="business">Negocios</option>
            </Form.Select>
            <ListaNoticias noticias={noticias}></ListaNoticias>
        </div>
        
    );
};

export default Formulario;