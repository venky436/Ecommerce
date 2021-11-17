import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Form,Button,ListGroup,Image} from 'react-bootstrap'
import { userLoginAction } from '../actions/userLoginAction'
import { LoginForm } from '../components/LoginForm'
import { useSelector,useDispatch } from 'react-redux'


import { Track } from '../components/Track'
import { OrderAction } from '../actions/OrderAction'




export const PlaceOrderScreen = ({history}) => {


    let dispatch = useDispatch()

    let cart = useSelector(state=>state.cart)

    let order = useSelector(state=>state.order)

    let {success}=order

    

     cart.ItemsPrice =cart.cartItems.reduce((acc,item)=>acc + item.price * item.qty,0).toFixed(2)

     cart.ShippingPrice = (cart.ItemsPrice > 200 ? 0 : 15).toFixed(2)

     cart.TaxPrice = ((0.08)*cart.ItemsPrice).toFixed(2)

     cart.TotalPrice = Number(cart.ItemsPrice) + Number(cart.ShippingPrice)+ Number(cart.TaxPrice)


    useEffect(()=>{

        if(success){
            history.push(`/order/${order._id}`)
        }

    },[success,history])

    let buttonHandler =()=>{
        

        dispatch(OrderAction({
            cartItems : cart.cartItems,
            shippingDetails : cart.shippingDetails,
            paymentMethod : cart.paymentMethod,
            taxPrice : cart.TaxPrice,
            shippingPrice : cart.ShippingPrice,
            totalPrice : cart.TotalPrice
        }))
    
    }

    return (
        <Row className="px-4">
            <Track step1 step2 step3 step4/>
            <Col md={8} className='p-3'>
                <ListGroup>
                    <ListGroup.Item>
                        <h3>SHIPPING</h3>
                        <p>{cart.shippingDetails.address} ,{cart.shippingDetails.city} {cart.shippingDetails.postalCode}  {cart.shippingDetails.country}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>PAYMENT METHOD</h3>
                        <p>Method  :  {cart.paymentMethod}</p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h3>CART ITEMS</h3>
                        {cart.cartItems.length === 0 ? (<h4>YOUR CART IS EMPTY</h4>) : 

                            cart.cartItems.map((item,index)=>(


                                <ListGroup >
                                    <ListGroup.Item key={index}>
                                    <Row >
                                        <Col md={2} className="p-2">
                                            <Image src={item.image} rounded className="d-block w-100" />
                                        </Col>
                                        <Col className="p-2">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>

                                        </Col>
                                        <Col md={5} className="p-2">
                                            {item.qty} X {item.price} = ${(item.qty * item.price).toFixed(2)}
                                        </Col>
                                    </Row><hr/>
                                    </ListGroup.Item>
                                </ListGroup>


                            )
                        )
                        
                    
                    }

                    </ListGroup.Item>
                </ListGroup>

            </Col>
            <Col className='p-3'>
             <ListGroup>
                <ListGroup.Item>
                    <h4>ORDER SUMMERY</h4>

                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Items </Col>
                        <Col>:</Col>
                        <Col>${cart.ItemsPrice}</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Shipping </Col>
                        <Col>:</Col>
                        <Col>${cart.ShippingPrice}</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Tax</Col>
                        <Col>:</Col>
                        <Col>${cart.TaxPrice}</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Toal </Col>
                        <Col>:</Col>
                        <Col>${cart.TotalPrice}</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button type="button" variant='info' onClick={buttonHandler} className='my-2 d-block w-100' disabled= {cart.cartItems ===0}>Place Order</Button>
                </ListGroup.Item>
             </ListGroup>

            </Col>
            
        </Row>
    )
}
