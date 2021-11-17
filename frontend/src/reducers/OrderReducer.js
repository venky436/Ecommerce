import {ORDER_REQUEST,ORDER_FAIL,ORDER_SUCCESS} from "../constants/OrderConstants"

export const OrderReducer=(state={},action)=>{

    switch(action.type){
        case ORDER_REQUEST:
            return{
                loading:true
            }
        case ORDER_SUCCESS:
            return {
                ...state,
                success : true,
                order : action.payload
            }
        case ORDER_FAIL:
            return{
                loading :false,
                error : action.payload
            }
        default :
        return state
    }

}