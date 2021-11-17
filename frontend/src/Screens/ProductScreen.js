import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import products from '../products'
import { Rating } from '../components/Rating'
import { Container,Row,Col,Button,ListGroup,Image,Card, ListGroupItem,Form } from 'react-bootstrap'

import { useDispatch,useSelector } from 'react-redux'
import { productDetailsList } from '../actions/ProductsAction'
import { useHistory } from 'react-router'
import { USER_LOGIN_SUCCESS } from '../constants/userConstants'



export const ProductScreen = ({match,history,location}) => {

    let [qty,setQty] = useState(1)
   
    //let [product,setProduct]= useState([])
    const details = useSelector(state => state.productDetail)

    const {error,loading,product} = details


    let login =useSelector(state=>state.userLogin)
    let {userInfo} = login

    const dispatch = useDispatch()



    useEffect(()=>{
        
       dispatch(productDetailsList(match.params.id,))
          
    },[dispatch,match]);
    //let history = useHistory()


 const addTocart =()=>{
     
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    
    
}
    return (
        <div>
            <Container>
                <Link to='/' className='btn btn-primary my-1'>Go Back</Link>
                {
                    loading ? (<h2>Loading...</h2>) : error ? (<h2>{error.message}</h2>) 
                    :<Row>
                    <Col className="col-md-6 p-4">
                        <Card>
                        <Image key={product._id} src={product.image} alt={product.name}/>
                        </Card>
                        
                    </Col>
                    <Col className="col-md-3 p-4">
                        <ListGroup>
                            <ListGroupItem>
                                <strong key={product._id}>{product.name}</strong>
                            </ListGroupItem>
                            <ListGroupItem className="d-block text-center">
                                <Rating value={product.rating} text={`${product.numReviews}  reviews`} />
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>{product.description}</strong>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col className="col-md-3 p-4 d-flex ">
                        <ListGroup>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                    Price 
                                    </Col>
                                    <Col>
                                    :
                                    </Col>
                                    <Col>
                                    {product.price}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                   Stock 
                                    </Col>
                                    <Col>
                                    :
                                    </Col>
                                    <Col>
                                    {product.countInStock ? "Instock" : "Out_Of_Stock"}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            {
                                product.countInStock > 0 && (

                                    <ListGroup.Item>
                                        <Row>
                                            <Col >Qty</Col>
                                            <Col >
                                            <Form.Control
                                             as ='select'
                                             value={qty}
                                             onChange={(e)=>setQty(e.target.value)}
                                            >
                                                {
                                                    [...Array(product.countInStock).keys()].map((x)=>(
                                                        <Form.Control as='option' key={x.index}>{x}</Form.Control>)
                                                    )
                                                }

                                            </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                            }
                            <ListGroupItem>
                                <Row>
                                    <Button className="btn-block" type="button" disabled={product.countInStock == 0}
                                    onClick={addTocart}
                                    > Add To Cart</Button>
                                   
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                }
          
          </Container>
        </div>
    )
}
