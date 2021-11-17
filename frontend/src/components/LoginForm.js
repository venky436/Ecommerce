import React, { Children } from 'react'
import {Container,Row,Col} from 'react-bootstrap'

export const LoginForm = ({children}) => {
    return (
        <Container>
            <Row className="d-flex justify-content-md-center align-items-center">
                <Col md={12}>
                   {children}
                </Col>
            </Row>
            
        </Container>
    )
}
