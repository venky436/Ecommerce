import { ORDER_FAIL,ORDER_SUCCESS,ORDER_REQUEST } from "../constants/OrderConstants";
import axios from 'axios'
import { useSelector } from 'react-redux'


export const OrderAction =(user)=>async function(dispatch,getState){

    let { userInfo}=getState().userLogin
    try{
    dispatch({
        type:ORDER_REQUEST
    })
    const conf = {

        headers : {

        'Content-type' : 'application/json',
        Authorization : `Token ${userInfo.token}`

        }
    }
    const {data} = await axios.post('http://127.0.0.1:8000/api/orders/add/',
                user,
                conf
                            )
    dispatch({
        type : ORDER_SUCCESS,
        payload : data
    })


    }catch(error){
        
        dispatch({
            type :ORDER_FAIL,
            payload : error.message
        })
    }
}
