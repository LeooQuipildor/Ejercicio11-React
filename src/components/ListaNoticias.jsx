import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Noticia from './Noticia';
Noticia

const ListaNoticias = ({noticias}) => {
    return (
        <Row>
            <Noticia noticias={noticias}></Noticia>
        </Row>
    );
};

export default ListaNoticias;