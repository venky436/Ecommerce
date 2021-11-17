import React,{useState,useEffect} from 'react'

import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Product } from '../components/Product.js'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { productsList } from '../actions/ProductsAction.js'
import { connect } from 'react-redux'
import { Rating } from '../components/Rating.js'




const HomeScreen = () => {
 
    
    const data = useSelector(state => state.products)
    //console.log(data)

    const {error,loading,products} = data

  //let [products,setProducts] = useState([])

   const dispatch = useDispatch()

   let color = "#8e825"
    useEffect(()=>{
     
        dispatch(productsList())
        
    },[])

   //let products =[]
 
    return (
       <Container>
           {
               loading ? (<h3>loading....</h3>) : error ? (<h2>{error.message}</h2>) : 

               (
               <Row className="d-flex justify-content-center">
           
               <h3 className="d-block text-center my-5 p-2" style={{borderBottom:"1px solid gray"}}>Leatest Product</h3> 
               {
                 products.map((product)=> (
    
                       <Col className="col-md-3 mx-1 p-2 col-sm-10  my-2 d-flex justify-content-center" >
                          
                          
                <Card> 
                <Link to={`/product/${product._id}`}>
                    <Card.Img key={product._id} src={product.image} />
                </Link>
                <Card.Body>
                    <Card.Title>
                        <strong key={product._id}>{product.name}</strong><hr />

                    </Card.Title>
                    <Card.Text as="div" className="d-block text-center">
                     
                     <Rating value={product.rating} text={`${product.numReviews} reviews`}  color ={color}/>

                     <strong style={{fontWeight:"bold"}}>Price : ${product.price}</strong>


                    </Card.Text>
                </Card.Body>
                </Card>
            
                        
                       </Col>
                   ))
               }
           </Row>
           )
           }
       
       </Container>
    )
}


export default HomeScreen;