import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer,productDetailsReducer } from './reducers/productsReducer';
import { cartReducer } from './reducers/cartReducer';
const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


const reducer = combineReducers({ 
  productList: productListReducer,  cart:cartReducer,
  productDetails:productDetailsReducer,

 });




 const initialState = {
  cart: {
    cartItems:cartItemsFromStorage
    
  },
 }

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
