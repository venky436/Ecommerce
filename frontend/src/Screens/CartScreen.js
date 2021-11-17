import React,{useState,useEffect} from 'react'
import { addCartAction } from '../actions/cartActions'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import {Row,Col,ListGroup,Image,Form,Button,Card,ListGroupItem} from 'react-bootstrap'
import { productDetailsList } from '../actions/ProductsAction'
import { RemoveItem } from '../actions/cartActions'


function CartScreen({match,location,history}) {

    
    let cartData = useSelector(state=>state.cart)

    let {cartItems}=cartData
  
    

   let login = useSelector(state=>state.userLogin)
   let {userInfo}=login
  // let {cartD} = cartData
  
//   if(userInfo.username){

    
//     let {cartItems} = cartData
//   }else{
   
    
//   }
 

  //console.log(cartItems)


   

    let dispatch = useDispatch()

    let path = match.params.id // for get id
    const qty = location.search ? location.search.split('=')[1] : 1 //for get quantity
   
   
    useEffect(()=>{
        dispatch(addCartAction(path,qty))
    },[dispatch,path])
   
    let removeItem=(id)=>{
        
        dispatch(RemoveItem(id))

    }

    let checkOutPage=()=>{
        history.push('/shipping')
    }

    //let cartItems= []
    return (
        <div>
            <Row>
                <Col md={8}>
                    
                      <h1 className='b-block text-center p-3 my-2'>Shopping Cart</h1>
                       {
                        cartItems.length ===0 ? (<h2>Your Cart is empty</h2>) 
                        :  
                       
                        cartItems.map((p)=>(
                            <Row className='p-3 ' style={{borderBottom :'1px solid gray'}}>
                                <Col md={2} lg={2} xs={2} className="my-1">
                                 
                                <Image src={p.image} fluid rounded title={p.name}/>

                                </Col>
                                <Col md={5} lg={4} xs={3}>
                                   
                                    <h5>{p.name}</h5>
                                </Col>
                                
                                <Col md={1} lg={1} xs={3}  className='mx-1'>
                                   
                                    <h5>${p.price}</h5>
                                </Col>
                                <Col md={2} lg={2} xs={3} className='mx-2'>
                                <Form.Control
                                             as ='select'
                                             value={p.qty}
                                             onChange={e =>dispatch(addCartAction(p.product,Number(e.target.value)))}
                                            >
                                                {
                                                   [...Array(p.countInStock).keys()].map((x)=>(
                                                    <option value={x+1} key={x+1}>{x+1}</option>)
                                                )
                                                }

                                            </Form.Control>

                                </Col>

                                <Col md={1} lg={1} xs={1}>
                                    <Button variant='light' type='button' onClick={()=>removeItem(p.product)}><i className='fas fa-trash' title='delete'></i></Button>
                                </Col>
                               
                            </Row> 
                        ))
                       
                       } 
                    
                    
                </Col>
                <Col md={4} className='my-5 p-4 '>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                                <h4>SubTotal ({cartItems.reduce((acc,item)=> acc+=item.qty,0)}) items</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price : $ ({cartItems.reduce((acc,item)=> acc + item.qty * item.price,0).toFixed(4)})
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type="button"
                                    disabled = {cartItems.length <= 0}
                                    className ='btn btn-primary'
                                    onClick={checkOutPage}
                                >
                                   CkeckOut

                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
           
        </div>
    )
}

export default CartScreen
