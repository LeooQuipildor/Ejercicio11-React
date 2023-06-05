import React from 'react';
import { Form } from 'react-bootstrap';

const Formulario = () => {
    return (
        <div>
            <p>Buscar por categoria:</p>
            <Form.Select aria-label="SelectCategoria">
                <option>Opciones</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </div>
        
    );
};

export default Formulario;