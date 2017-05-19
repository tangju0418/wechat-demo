const Redux = require('./libs/redux.js')
const combineReducers = Redux.combineReducers

const { identity } = require('./modules/identity.js')
const { cart } = require('./modules/cart.js')
const { order } = require('./modules/order.js')
const { tableNum } = require('./modules/tableNum.js')
const { table } = require('./modules/table.js')
const { startup } = require('./modules/startup.js')

module.exports = combineReducers({
  identity: identity,
  cart: cart,
  order: order,
  tableNum: tableNum,
  table: table,
  startup: startup
})
