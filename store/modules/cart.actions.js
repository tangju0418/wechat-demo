
const {
  cartTypes
} = require('./cart.js')

const addToCart = (args) =>{
    const action = {
        type: cartTypes[ADD_TO_CART],
        args
    }
    dispatch(action(args))
}
const plusToCart = (args) =>{
    const action = {
        type: cartTypes[PLUS_TO_CART],
        args
    }
    dispatch(action(args))
}
const minusFromCart = (args) =>{
    const action = {
        type: cartTypes[MINUS_FROM_CART],
        args
    }
    dispatch(action(args))
}
const cleanCart = () =>{
    const action = {
        type: cartTypes[CLEAN_CART],
    }
    dispatch(action)
}

module.exports = {
  addToCart,
  plusToCart,
  minusFromCart,
  cleanCart
}
