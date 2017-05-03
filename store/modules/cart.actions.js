
const {
  cartTypes
} = require('./cart.js')

const addToCart = (args) =>{
    return (dispatch, getState) => {
        dispatch({type: cartTypes.ADD_TO_CART,args})
    }
   
}
const plusToCart = (args) =>{
    return (dispatch, getState) => {
        dispatch({type: cartTypes.PLUS_TO_CART,args})
    }
}
const minusFromCart = (args) =>{
    return (dispatch, getState) => {
        dispatch({type: cartTypes.MINUS_FROM_CART,args})
    }  
}
const cleanCart = () =>{
    return (dispatch, getState) => {
        dispatch({type: cartTypes.CLEAN_CART})   
    }
}

module.exports = {
  addToCart,
  plusToCart,
  minusFromCart,
  cleanCart
}
