const Redux = require('./libs/redux.js')
const combineReducers = Redux.combineReducers

const {
  identity
} = require('./modules/identity.js')

module.exports = combineReducers({
  identity: identity
})
