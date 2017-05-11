const Redux = require('./libs/redux.js')
const combineReducers = Redux.combineReducers

const {
  identity
} = require('./modules/identity.js')
const {
  cart
} = require('./modules/cart.js')
const {
  order
} = require('./modules/order.js')

module.exports = combineReducers({
  identity: identity,
  cart: cart,
  order: order
})
