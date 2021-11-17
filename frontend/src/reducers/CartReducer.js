import { ADD_TO_CRT, CART_SHIPPING_DETAILS, REMOVE_FROM_CRT,PAYMENT_METHOD } from "../constants/CartConstants";


export const addCartReducer=(state = {cartItems : [], shippingDetails : {},paymentMethod : []},action)=>{
    switch(action.type){
        case ADD_TO_CRT:
            let item = action.payload
            let existItem = state.cartItems.find(x=>x.product===item.product)

            if(existItem){
                return {
                    ...state,
                    cartItems : state.cartItems.map(x=>x.product === existItem.product ? item : x)
                }
                

            }else{
                return {
                    ...state,
                    cartItems : [...state.cartItems,item]
                }
            }
            case REMOVE_FROM_CRT:

                return{
                    ...state,
                    cartItems : state.cartItems.filter(x=>x.product !== action.payload) 
                }
            case CART_SHIPPING_DETAILS:
                return {
                    ...state,
                    shippingDetails : action.payload
                }
            case PAYMENT_METHOD:
                return{
                    ...state,
                    paymentMethod : action.payload
                }
            default:
                
            return {
                ...state
            }
    }

}