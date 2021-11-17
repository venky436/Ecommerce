import React from 'react'
import { Form,Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const Track = ({step1,step2,step3,step4}) => {
    return (
        <Nav className="justify-content-center m-2">
            {step1 ? (
                <Nav.Item>
                <LinkContainer to="/login">
                    <Nav.Link>
                        Login
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>

            ) : (<Nav.Link disabled>
                   Login
                </Nav.Link>)
            
            }

            {step2 ? (
                <Nav.Item>
                <LinkContainer to="/shipping">
                    <Nav.Link>
                        Shipping
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>

            ) : (<Nav.Link disabled>
                   shipping
                </Nav.Link>)
            
            }

            {step3 ? (
                <Nav.Item>
                <LinkContainer to="/payment">
                    <Nav.Link>
                        Payment
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>

            ) : (<Nav.Link disabled>
                   Payment
                </Nav.Link>)
            
            }


           {step4 ? (
                <Nav.Item>
                <LinkContainer to="/placeOrder">
                    <Nav.Link>
                        PlaceOrder
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>

            ) : (<Nav.Link disabled>
                   PlaceOrder
                </Nav.Link>)
            
            }
            
            
        </Nav>
    )
}
