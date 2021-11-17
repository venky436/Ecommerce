import React,{useEffect} from 'react'
import { Navbar,Nav,Container,Row,NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { logout } from '../actions/userLoginAction'

const Header = () => {

  let data = useSelector(state=>state.userLogin)

  let {userInfo} = data

  const dispatch = useDispatch()


 let logoutHandlar =()=>{
    
    dispatch(logout())
 }


    return (
       
    <header>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                       <LinkContainer to="/" >
                        <Navbar.Brand >Ecommerce</Navbar.Brand>
                       </LinkContainer>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <LinkContainer to="/cart">
                                        <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                                        </LinkContainer>
                                        
                                        {userInfo ? (

                                            <NavDropdown title={userInfo.username} id="username">
                                                <LinkContainer to="/profile">
                                                    <NavDropdown.Item>
                                                        Profile
                                                    </NavDropdown.Item>


                                                </LinkContainer>
                                                <NavDropdown.Item onClick={logoutHandlar}>
                                                    Logout
                                                </NavDropdown.Item>

                                            </NavDropdown>
                                           ) : <LinkContainer to="/login">
                                            <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                                            </LinkContainer>
                                        
                                        }


                                        
                            
                </Nav>
                     </Navbar.Collapse>
                   </Container>
                </Navbar>
    </header>
       
    )
}

export default Header;