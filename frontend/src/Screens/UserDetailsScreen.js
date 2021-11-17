import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import { userLoginAction } from '../actions/userLoginAction'
import { LoginForm } from '../components/LoginForm'
import { useSelector,useDispatch } from 'react-redux'
import { userRegisterAction } from '../actions/userLoginAction'
import { userRegisterReducer } from '../reducers/userReducers'
import { userDetailsAction } from '../actions/userLoginAction'
import { userUpdateAction } from '../actions/userLoginAction'
import { USER_LOGIN_SUCCESS, USER_PROFILE_RESET } from '../constants/userConstants'



export const UserDetailsScreen = ({history}) => {

    const [email,setEmail] = useState('')
    const [name,setName] = useState('')

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState('')

    const dispatch = useDispatch()


    const data = useSelector(state=>state.userDetails)
    let {error,user,loading} = data


    const login = useSelector(state=>state.userLogin)
    const {userInfo} = login

    const userUpdate = useSelector(state=>state.userUpdate)
    const {success} = userUpdate

    
   useEffect(()=>{

        if(!userInfo){
            history.push('/login')
           }else{

              if(!user || !user.name ){
                
                // dispatch({
                //     type : USER_PROFILE_RESET
                // })

                dispatch(userDetailsAction('profile'))
           
              }else{

                setEmail(user.email)
                setUsername(user.username)
               
                setName(user.name)
    
            }
           }
    },[dispatch,user,userInfo,history])


     
     let submitHandlar=(e)=>{
        e.preventDefault();

        if(password != confirmpassword){
             setMessage('password not match')
        }else{
           dispatch(userUpdateAction({
               'id':user._id,
               'username':username,
               'email':email,
               'password':password,
               'name': name
           }))
           setMessage('')
        }
         
         
     }
    return (
        <Row>
            { loading ? (<h3>Loading....</h3>) : ''}
            {error ? (<h3>{error.message}</h3>) : ''}
            <Col md={3} className='m-3'>
               <h3>Profile Details</h3><hr/>
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
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                         type="text"
                         placeholder="enter Username"
                         value={name}
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
                  <Button type="submit" className="btn btn-primary my-3 b-block text-center">Update</Button>
              </Form>

            </Col>
            <Col md={8}>
                Products Details
            </Col>

            
        </Row>
    )
}
