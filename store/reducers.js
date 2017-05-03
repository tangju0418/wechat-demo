const Redux = require('./libs/redux.js')
const combineReducers = Redux.combineReducers

const {
  identity
} = require('./modules/identity.js')
const {
  cart
} = require('./modules/cart.js')

module.exports = combineReducers({
  identity: identity,
  cart: cart
})
