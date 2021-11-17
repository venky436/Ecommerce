import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import { userLoginAction } from '../actions/userLoginAction'
import { LoginForm } from '../components/LoginForm'
import { useSelector,useDispatch } from 'react-redux'
import { userRegisterAction } from '../actions/userLoginAction'
import { userRegisterReducer } from '../reducers/userReducers'



export const RegisterScreen = ({history,location}) => {

    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState('')

    const dispatch = useDispatch()

    const data = useSelector(state=>state.userRegister)


    let {error,userRegisterInfo,loading} = data
    
   useEffect(()=>{

        if(userRegisterInfo){
            history.push('/')
        }
    },[userRegisterInfo,history])
     
     let submitHandlar=(e)=>{
         e.preventDefault();
         if(password != confirmpassword){
             setMessage('password not match')
            
        }else{
             dispatch(userRegisterAction(email,username,password))
        }
         
     }

    return (
        <Container>
            <Row>
                {message && (<h4>{message}</h4>)}
                {error ? (<h4>{error}</h4>) : []}
                {loading ? (<h2>Loading...</h2>) : []}
                <Col md={6}>
            <h3 className='d-block text-center my-5'>Register</h3>
          <LoginForm>

              <Form onSubmit={submitHandlar} >
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
                      <Form.Label>email</Form.Label>
                      <Form.Control
                         type="email"
                         placeholder="enter email"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
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
                      <Form.Group>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                         type="password"
                         placeholder="confirm password"
                         value={confirmpassword}
                         onChange={(e)=>setConfirmPassword(e.target.value)}
                      >

                      </Form.Control>
                  </Form.Group>
                  </Form.Group>
                  <Button type="submit" className="btn btn-primary my-3 b-block text-center">Register</Button>
              </Form>
          </LoginForm>
           </Col>
          </Row>
          <Row>
              <Col>
                 Have an Account ? <Link to='/login' >Login</Link>
              </Col>
          </Row>
        </Container>
    )
}
