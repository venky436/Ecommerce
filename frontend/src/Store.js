import { createStore,applyMiddleware,combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {productsReducer,productsDetailsReducer} from './reducers/ProductsReducer'

import { addCartReducer } from './reducers/CartReducer';
import {userReducer,userRegisterReducer,userDetailsReducer,userUpdateReducer} from './reducers/userReducers'
import userLoginAction from './actions/userLoginAction'
import {OrderReducer} from './reducers/OrderReducer';

let localItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

let productsFromStorage  = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []



let userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

let userDetailsFromStorage = localStorage.getItem('userDetailsInfo') ? JSON.parse(localStorage.getItem('userDetailsInfo')) : null

let shippingDetailsFromStorage = localStorage.getItem('shippingDetails') ? JSON.parse(localStorage.getItem('shippingDetails')) : {}

let paymentFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : []



//console.log(localItems)
const initialState = {
    cart : {
        cartItems : localItems,
        shippingDetails : shippingDetailsFromStorage ,
        paymentMethod : paymentFromStorage,
    },
    products : {products :productsFromStorage  },
    userLogin : {userInfo : userInfoFromStorage},
    userDetails : {user : userDetailsFromStorage}
}


const rootReducer = combineReducers({

    products : productsReducer,
    productDetail : productsDetailsReducer,
    cart : addCartReducer,
    userLogin : userReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdate : userUpdateReducer,
    order : OrderReducer,
})


export const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk.withExtraArgument())))

