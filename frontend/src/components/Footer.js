import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <div>
            <footer>
                <Container>
                    <Row>
                        <Col className="d-block text-center">
                            <h5>Copyright &copy; Reserved</h5>
                        </Col>
                    </Row>
                </Container>
            </footer>
            
        </div>
    )
}

export default Footer;