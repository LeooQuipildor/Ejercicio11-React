import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

const Noticia = ({noticias}) => {
    return (
    <Row className='text-center'>
            {noticias.map((noticia,indice) => (
            <Col lg={3} key={indice}>
                <Card> 
                    <Card.Img variant="top" src={noticia.image_url} alt="imgNoticia"/>
                    <Card.Body>
                        <Card.Title>{noticia.title}</Card.Title>
                        <Card.Text className="text-truncate">{noticia.description}</Card.Text>
                        <Button variant="success">Ver noticia completa</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
    </Row>
    );
};

export default Noticia;