import { ADD_TO_CRT, REMOVE_FROM_CRT,CART_SHIPPING_DETAILS,PAYMENT_METHOD } from "../constants/CartConstants";
import axios from 'axios'


export const addCartAction=(id,qty)=> async (dispatch,getState)=>{

   let {data} = await axios.get(`/api/products/${id}`)
   
   dispatch({
       type : ADD_TO_CRT,
       payload : {
           product : data._id,
           name : data.name,
           image : data.image,
           price : data.price,
           countInStock : data.countInStock,
           qty
       }
   })
   localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
  
}


export const RemoveItem=(id)=>(dispatch,getState)=>{

    dispatch({
        type : REMOVE_FROM_CRT,
        payload : id,
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}


export const shippingDetailsAction=(data)=>(dispatch)=>{

    dispatch({
        type : CART_SHIPPING_DETAILS,
        payload : data,
    })
    localStorage.setItem('shippingDetails',JSON.stringify(data))
}


export const paymentAction=(data)=>(dispatch)=>{

    dispatch({
        type : PAYMENT_METHOD,
        payload : data,
    })
    localStorage.setItem('paymentMethod',JSON.stringify(data))
}
