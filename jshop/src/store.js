
import {combineReducers} from 'redux';
import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllProductsReducer,getProductByIdReducer } from "./reducers/productReducer";

import { cartReducer } from "./reducers/cartReducer";
import { registerNewUserReducer,loginReducer,updateReducer } from "./reducers/userReducer";
import {placeOrderReducer}from './reducers/orderReducer';
import {getOrdersByUserIdReducer,getOrderByIdReducer} from './reducers/orderReducer';

const composeEnhancers = composeWithDevTools({
  });

const finalReducer = combineReducers(
    {

    getAllProductsReducer : getAllProductsReducer,
    getProductByIdReducer : getProductByIdReducer,
    cartReducer:cartReducer,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer,
    placeOrderReducer:placeOrderReducer,
    getOrdersByUserIdReducer:getOrdersByUserIdReducer,
    getOrderByIdReducer :getOrderByIdReducer,
    updateReducer : updateReducer
})

const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []


const currentUser=localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) :null
const initialState={

  cartReducer :{cartItems : cartItems},
  loginReducer :{currentUser: currentUser}
}
const store = createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store