import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    
    USER_DETAILS_REQUEST,
    USER_DETAILS_FAIL,
    USER_DETAILS_SUCCESS,
    USER_PROFILE_RESET,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_REQUEST,
    USER_UPDATE_FAIL


} from '.././constants/userConstants'

import axios from 'axios'
import { useSelector } from 'react-redux'

//Login..................................

export const userLoginAction =(username,password)=>async function(dispatch){
    try{
    dispatch({
        type:USER_LOGIN_REQUEST
    })
    const conf = {
        headers : {

        'Content-type' : 'application/json'
        }
    }
    const {data} = await axios.post('http://127.0.0.1:8000/api/users/login/',
                    {"username" : username,"password" : password},
                    conf
                            )
    dispatch({
        type : USER_LOGIN_SUCCESS,
        payload : data
    })

    localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(error){
        
        dispatch({
            type :USER_LOGIN_FAIL,
            payload : error.message
        })
    }
}


//Logout....................................

export const logout =()=>(dispatch)=>{

    localStorage.removeItem('userInfo')
    dispatch({
        type : USER_LOGOUT
    })

}

// Register.........................

export const userRegisterAction =(email,username,password)=>async function(dispatch){
    try{
    dispatch({
        type:USER_REGISTER_REQUEST,
    
    })

    const conf = {
        headers : {

        'Content-type' : 'application/json'
        }
    }
    const {data} = await axios.post('http://127.0.0.1:8000/api/users/register/',
                    {"email" : email,"username" : username,"password" : password},
                    conf
                            )
    dispatch({
        type : USER_REGISTER_SUCCESS,
        payload : data
    })
    dispatch({
        type : USER_LOGIN_SUCCESS,
        payload : data
    })

    localStorage.setItem('userRegisterInfo',JSON.stringify(data))
    }catch(error){
        
        dispatch({
            type :USER_REGISTER_FAIL,
            payload : error.message
        })
    }
}


export const userDetailsAction =(id)=>async function(dispatch,getState){
    try{
    dispatch({
        type:USER_DETAILS_REQUEST,
    
    })

    let { userLogin : {userInfo} }= getState()

    const conf = {

        headers : {

        'Content-type' : 'application/json',
        Authorization : `Token ${userInfo.token}`

        }
    }
    const {data} = await axios.post(`http://127.0.0.1:8000/api/users/${id}`,
                    conf
                            )
    dispatch({
        type : USER_DETAILS_SUCCESS,
        payload : data
    })
    localStorage.setItem('userDetailsInfo',JSON.stringify(data))


    }catch(error){
        
        dispatch({
            type :USER_DETAILS_FAIL,
            payload : error.message
        })
    }
}


export const userUpdateAction =(user)=>async function(dispatch,getState){

    try{
    dispatch({
        type:USER_UPDATE_REQUEST,
    
    })
    const { userLogin : {userInfo}  } = getState()

    const conf = {

        headers : {

        'Content-type' : 'application/json',
        Authorization : `Token ${userInfo.token}`

        }
    }
    const {data} = await axios.put(`http://127.0.0.1:8000/api/users/profile/update/`,
                    user,
                    conf
                            )
    dispatch({
        type : USER_UPDATE_SUCCESS,
        payload : data
    })
    

     dispatch({
        type : USER_LOGIN_SUCCESS,
        payload : data
    })

    localStorage.setItem('userInfo',JSON.stringify(data))
    
    }catch(error){
        
        dispatch({
            type :USER_UPDATE_FAIL,
            payload : error.message
        })

    
    }
    }



