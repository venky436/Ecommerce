import React from 'react'
import { Card,Row,Col } from 'react-bootstrap'
import HomeScreen from '../Screens/HomeScreen'
import { Rating } from './Rating'
import { Link } from 'react-router-dom'

export const Product = (props) => {
  let color = "#8e825"
    
    return (
      
        
                <Card> 
                <Link to={`/product/${props.pro._id}`}>
                    <Card.Img src={props.pro.image} />
                </Link>
                <Card.Body>
                    <Card.Title>
                        <strong >{props.pro.name}</strong><hr />

                    </Card.Title>
                    <Card.Text as="div" className="d-block text-center">
                     
                     <Rating value={props.pro.rating} text={`${props.pro.numReviews} reviews`}  color ={color}/>

                     <strong style={{fontWeight:"bold"}}>Price : ${props.pro.price}</strong>


                    </Card.Text>
                </Card.Body>
                </Card>
            
      
    )
}
