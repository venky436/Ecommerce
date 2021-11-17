import axios from "axios"
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL

    } from "../constants/ProductConstants"


export const productsList=() => async (dispatch)=>{

    try{
        dispatch({
            type : PRODUCT_LIST_REQUEST,
           
        })

        let {data} = await axios.get('http://127.0.0.1:8000/api/products/')
        
        dispatch({
            type : PRODUCT_LIST_SUCCESS,
            payload : data
        })
        localStorage.setItem('products',JSON.stringify(data))
    }catch(error){
        dispatch({
            type : PRODUCT_LIST_FAIL,
            payload : error
        })
    }

}


export const productDetailsList=(id,qty) => async (dispatch)=>{

    try{
        dispatch({
            type : PRODUCT_DETAILS_REQUEST,
            payload : []
        })

        let {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
       
        
        dispatch({
            type : PRODUCT_DETAILS_SUCCESS,
            payload : data,
            qty
        })
    }catch(error){
        dispatch({
            type : PRODUCT_DETAILS_FAIL,
            payload : error
        })
    }

}