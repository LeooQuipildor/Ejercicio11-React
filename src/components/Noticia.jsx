import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';


const Noticia = () => {
    return (
        <Col xs={4}>
            <Card>
                <Card.Img variant="top" src="https://media.tycsports.com/files/2023/02/10/532928/lionel-messi_1440x810_wmk.webp" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>LoremASJIDGASIDASGHDASUGDASJhsagdhjasgdjhasgdjashdgjasdgasdgjhasgdhjsa</Card.Text>
                    <hr />
                    <Button variant="primary">Ver noticia completa</Button>
                </Card.Body>
            </Card>
        </Col>

        
    );
};

export default Noticia;