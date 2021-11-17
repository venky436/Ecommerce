import React,{useState} from 'react'
import {Form,Col,Button} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { Track } from '../components/Track'
import { paymentAction } from '../actions/cartActions'

export const PaymentScreen = ({history}) => {

    let [payment,setPayment]=useState('paypal or Credit')
    let [upi,setUpi]=useState('UPI')


    let dispatch = useDispatch()

    let data = useSelector(state=>state.cart)

    
    let {shippingDetails}=data

    
      

    let submitHandler =(e)=>{

        e.preventDefault()

        if(!shippingDetails.address ){
            history.push('/shipping')
            
        }else{
            dispatch(paymentAction(payment))
            history.push('/placeOrder')
        }
       

    }


    return (
        <>
            <Track step1 step2 step3/>

         <h4 className="d-block  text-success my-4">METHOD TO PAY</h4>
         <Form onSubmit={submitHandler}>
             <Form.Group>
             <Form.Check type="checkbox" label={payment} required/>
            
                 
             </Form.Group>

             <Button type="submit" checked className='btn btn-primary my-3'>Place Order</Button>
         </Form>

         </>

    )
}
