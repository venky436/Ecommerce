import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import { userLoginAction } from '../actions/userLoginAction'
import { LoginForm } from '../components/LoginForm'
import { useSelector,useDispatch } from 'react-redux'

export const LoginScreen = ({location,history}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()


     const data = useSelector(state => state.userLogin)
   
     const {error,loading,userInfo} = data
    
     useEffect(()=>{

        if(userInfo){
            history.push('/')
        }

     },[history,userInfo])


    const submitHandlar=(e)=>{
        e.preventDefault();
    
        dispatch(userLoginAction(username,password))
        
    }

    return (
        <Container>
            <Row>
                {error ? (<h4>{error}</h4>) : []}
                {loading ? (<h2>Loading...</h2>) : []}
                <Col md={6}>
            <h3 className='d-block text-center my-5'>Login</h3>
          <LoginForm>
              <Form onSubmit={submitHandlar} action='/'>
                  <Form.Group>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                         type="text"
                         placeholder="enter Username"
                         value={username}
                         onChange={(e)=>setUsername(e.target.value)}
                      >

                      </Form.Control>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                         type="password"
                         placeholder="enter password"
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                      >

                      </Form.Control>
                  </Form.Group>
                  <Button type="submit" className="btn btn-primary my-3 b-block text-center">Login</Button>
              </Form>
          </LoginForm>
           </Col>
          </Row>
          <Row>
              <Col>
                 Not Register ? <Link to='/register'>Register</Link>
              </Col>
          </Row>
        </Container>
    )
}
