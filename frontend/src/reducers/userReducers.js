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

    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,

    USER_PROFILE_RESET

} from '.././constants/userConstants'


export const userReducer =(state = {userInfo : {}},action)=>{

    switch(action.type){
        case  USER_LOGIN_REQUEST:
            return{
                loading : true,
            }
        case  USER_LOGIN_SUCCESS :
            return{
                loading : false,
                userInfo : action.payload,
                
            }
        case USER_LOGIN_FAIL:
            return{
                loading :false,
                error : action.payload
            }
        case USER_LOGOUT:
            return {}

        default :
        return { ...state}


    }

}


export const userRegisterReducer =(state = {userRegisterInfo : {}},action)=>{

    switch(action.type){
        case  USER_REGISTER_REQUEST:
            return{
                loading : true,
            }
        case  USER_REGISTER_SUCCESS :
            return{
                loading : false,
                userRegisterInfo : action.payload,
                
            }
        case USER_REGISTER_FAIL:
            return{
                loading :false,
                error : action.payload
            }
        default :
        return { ...state}


    }

}



export const userDetailsReducer =(state = {user : {}},action)=>{

    switch(action.type){
        case  USER_DETAILS_REQUEST:
            return{
                loading : true,
                ...state
            }
        case  USER_DETAILS_SUCCESS :
            return{
                loading : false,
                user : action.payload,
                
            }
        case USER_DETAILS_FAIL:
            return{
                loading :false,
                error : action.payload
            }
        default :
        return { ...state}


    }

}



export const userUpdateReducer =(state = {},action)=>{

    switch(action.type){
        case  USER_UPDATE_REQUEST:
            return{
                loading : true,
               
            }
        case  USER_UPDATE_SUCCESS :
            return{
                loading : false,
                userUpdate : action.payload,
                success : true
                
            }
        case USER_UPDATE_FAIL:
            return{
                loading :false,
                error : action.payload
            }
        case USER_PROFILE_RESET:
            return {}
        default :
        return state


    }

}
