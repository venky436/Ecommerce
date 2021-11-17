import React,{useState,useEffect} from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { shippingDetailsAction } from '../actions/cartActions'
import { Track } from '../components/Track'




export const ShippingScreen = ({history}) => {

    let data = useSelector(state=>state.cart)

    let {shippingDetails}=data

    let login = useSelector(state=>state.userLogin)

    let {userInfo}=login


    const [address,setAddress] = useState(shippingDetails.address)
    const [city,setCity] = useState(shippingDetails.city)
    const [postalCode,setPostalCode] = useState(shippingDetails.postalCode)
    const [country,setCountry] = useState(shippingDetails.country)

    const dispatch = useDispatch()
 
  
    const submitHandler=(e)=>{
        e.preventDefault()
        if(!userInfo){
            history.push('/login')

        }else{
        
        
        dispatch(shippingDetailsAction({address,city,postalCode,country}))
        history.push('/payment')
        }
    }

    return (

        <Row className='p-4'>
            <Col md={7} className='p-3'>
                <Track step1 step2 />
                <h4>SHIPPING DETAILS</h4><hr />
            <Form onSubmit={submitHandler}>
                <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                         type="text"
                         placeholder="enter Address"
                         value={address ? address : ''}
                         onChange={(e)=>setAddress(e.target.value)}
                      >

                      </Form.Control>
                </Form.Group>

                <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                         type="text"
                         placeholder="enter city"
                         value={city ? city : ''}
                         onChange={(e)=>setCity(e.target.value)}
                      >

                      </Form.Control>
                </Form.Group>

                <Form.Group>
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control
                         type="text"
                         placeholder="enter Postal Code"
                         value={postalCode ? postalCode : ''}
                         onChange={(e)=>setPostalCode(e.target.value)}
                      >

                      </Form.Control>
                </Form.Group>

                <Form.Group>
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                         type="text"
                         placeholder="enter country"
                         value={country ? country : ''}
                         onChange={(e)=>setCountry(e.target.value)}
                      >

                      </Form.Control>
                </Form.Group>
                <Button type="submit" className="btn btn-primary my-3 b-block text-center">Payment</Button>


            </Form>
            </Col>
        </Row>
    )
}
